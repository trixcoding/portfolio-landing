import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import LocaleSwitcher from './LocaleSwitcher';

export default function Home() {
  const t = useTranslations('Home');
  const nav = useTranslations('Nav');

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-lg text-center">
        <span className="inline-block bg-blue-50 text-blue-700 text-xs font-medium px-3 py-1 rounded-full mb-6">
          {t('badge')}
        </span>

        <h1 className="text-3xl font-bold text-gray-900 mb-3">
          {t('greeting')}
        </h1>
        <p className="text-gray-500 leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-3 transition"
          >
            {nav('projects')}
          </Link>
          <Link
            href="/about"
            className="border border-gray-300 hover:border-gray-400 text-gray-900 font-medium rounded-lg px-6 py-3 transition"
          >
            {nav('about')}
          </Link>
        </div>

        <LocaleSwitcher />
      </div>
    </div>
  );
}