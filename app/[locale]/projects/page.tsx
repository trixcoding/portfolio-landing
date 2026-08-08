import { getTranslations, getLocale } from 'next-intl/server';
import { Link } from '../../i18n/navigation';
import ProjectCard from './ProjectCard';

export default async function ProjectsPage() {
  const t = await getTranslations('Projects');
  const locale = await getLocale();

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link
          href="/"
          className="text-blue-600 hover:underline text-4xl"
        >
          {locale === 'en' ? '←' : '→'}
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-1">
          {t('title')}
        </h1>

        <p className="text-gray-500 mb-8">
          {t('subtitle')}
        </p>

        <div className="flex flex-col gap-4">
          <ProjectCard
            title={t('urlShortener.title')}
            description={t('urlShortener.description')}
            tag="Redis + BullMQ + PostgreSQL"
            visitLabel={t('urlShortener.visit')}
            aboutLabel={t('urlShortener.about')}
            visitUrl="https://url-shortener-xnmp.vercel.app/"
            aboutUrl="https://url-shortener-xnmp.vercel.app/about"
          />

          <ProjectCard
            title={t('authShowcase.title')}
            description={t('authShowcase.description')}
            tag="Session + JWT(Jose)"
            visitLabel={t('authShowcase.visit')}
            aboutLabel={t('authShowcase.about')}
            visitUrl="https://auth-showcase-two.vercel.app/"
            aboutUrl="https://auth-showcase-two.vercel.app/about"
          />
        </div>
      </div>
    </div>
  );
}