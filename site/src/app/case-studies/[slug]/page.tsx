import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { caseStudies } from '@/data/caseStudies.js';
import CaseStudy, { type Study } from './CaseStudy';

type Params = { params: Promise<{ slug: string }> };
const studies = caseStudies as Record<string, Study>;

export function generateStaticParams() {
  return Object.keys(studies).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const study = studies[(await params).slug];
  return { title: study?.title };
}

export default async function Page({ params }: Params) {
  const study = studies[(await params).slug];
  if (!study) notFound();
  return <CaseStudy study={study} />;
}
