import { notFound } from "next/navigation";
import { getSectionData, getSectionBySlug } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Quiz } from "@/components/quiz";
import Image from "next/image";
import type { Metadata } from 'next';

export async function generateStaticParams() {
  const { SECTIONS } = await import("@/lib/data");
  return SECTIONS.map((section) => ({
    slug: section.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const section = getSectionBySlug(params.slug);

  if (!section) {
    return {
      title: 'Sección no encontrada',
      description: 'Esta sección de la revista no existe.'
    }
  }

  return {
    title: `${section.title} | Anatomía al Día`,
    description: `Aprende todo sobre ${section.title} en nuestra revista de anatomía.`,
  }
}

function ContentRenderer({ content }: { content: (string | { type: string; items: string[] })[] }) {
  return (
    <div className="prose prose-lg dark:prose-invert max-w-none text-foreground/90 space-y-6">
      {content.map((item, index) => {
        if (typeof item === 'string') {
          return <p key={index}>{item}</p>;
        }
        if (item.type === 'list') {
          return (
            <ul key={index} className="list-disc list-inside space-y-2">
              {item.items.map((li, i) => <li key={i}>{li}</li>)}
            </ul>
          );
        }
        return null;
      })}
    </div>
  );
}


export default async function MagazinePage({ params }: { params: { slug: string } }) {
  const sectionData = getSectionData(params.slug);

  if (!sectionData) {
    notFound();
  }

  const { title, introduction, subSections, content, images, glossary, quiz, mainImage } = sectionData;

  return (
    <article className="space-y-8">
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle className="text-3xl md:text-4xl font-extrabold font-headline">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-12">
          {introduction && (
            <div className="prose prose-xl dark:prose-invert max-w-none text-foreground/90 space-y-4">
              {introduction.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          )}

          {mainImage && (
            <div className="relative aspect-[2/1] rounded-lg overflow-hidden border shadow-sm my-8">
              <Image src={mainImage.src} alt={mainImage.alt} layout="fill" objectFit="cover" data-ai-hint={mainImage.hint} className="bg-muted"/>
            </div>
          )}
          
          {subSections && subSections.map((sub, index) => (
            <section key={index} className="space-y-6 border-t pt-8">
               <h2 className="text-2xl font-bold font-headline">{sub.subtitle}</h2>
               <ContentRenderer content={sub.text} />
               {sub.images && sub.images.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  {sub.images.map((img, imgIndex) => (
                    <div key={imgIndex} className="relative aspect-video rounded-lg overflow-hidden border shadow-sm">
                      <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.hint} className="bg-muted"/>
                    </div>
                  ))}
                </div>
              )}
            </section>
          ))}

          {content && <ContentRenderer content={content} />}

          {images && images.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {images.map((img, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden border shadow-sm">
                  <Image src={img.src} alt={img.alt} layout="fill" objectFit="cover" data-ai-hint={img.hint} className="bg-muted"/>
                </div>
              ))}
            </div>
          )}

          {glossary && (
            <div>
              <h2 className="text-2xl font-bold mt-12 mb-4 font-headline">Glosario de Términos</h2>
              <Accordion type="single" collapsible className="w-full">
                {glossary.map((term, index) => (
                  <AccordionItem value={`item-${index}`} key={index}>
                    <AccordionTrigger className="text-lg">{term.term}</AccordionTrigger>
                    <AccordionContent className="text-base text-muted-foreground">
                      {term.definition}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          )}

          {quiz && (
             <div>
              <h2 className="text-2xl font-bold mt-12 mb-4 font-headline">Cuestionario</h2>
              <Quiz questions={quiz} />
            </div>
          )}

        </CardContent>
      </Card>
    </article>
  );
}
