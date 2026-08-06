import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import ProjectCard from './ProjectCard';

export default function ProjectsPage() {
  const t = useTranslations('Projects');

  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline text-sm">
          ←
        </Link>

        <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-1">
          {t('title')}
        </h1>
        <p className="text-gray-500 mb-8">{t('subtitle')}</p>

        <div className="flex flex-col gap-4">
          <ProjectCard
            title={t('urlShortener.title')}
            description={t('urlShortener.description')}
            visitLabel={t('urlShortener.visit')}
            aboutLabel={t('urlShortener.about')}
            visitUrl="https://YOUR-URL-SHORTENER.vercel.app"
            aboutUrl="https://YOUR-URL-SHORTENER.vercel.app/about"
          />
          <ProjectCard
            title={t('authShowcase.title')}
            description={t('authShowcase.description')}
            visitLabel={t('authShowcase.visit')}
            aboutLabel={t('authShowcase.about')}
            visitUrl="https://YOUR-AUTH-SHOWCASE.vercel.app"
            aboutUrl="https://YOUR-AUTH-SHOWCASE.vercel.app/about"
          />
        </div>
      </div>
    </div>
  );
}