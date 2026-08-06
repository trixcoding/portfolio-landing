import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export default function AboutPage() {
  const t = useTranslations('About');

    return (
        <div className="min-h-screen bg-white px-4 py-12">
              <div className="max-w-2xl mx-auto">
                      <Link href="/" className="text-blue-600 hover:underline text-sm">
                                ←
                                        </Link>

                                                <h1 className="text-2xl font-bold text-gray-900 mt-4 mb-2">
                                                          {t('title')}
                                                                  </h1>
                                                                          <p className="text-gray-600 leading-relaxed mb-8">{t('intro')}</p>

                                                                                  <h2 className="text-lg font-bold text-gray-900 mb-3">
                                                                                            {t('howTitle')}
                                                                                                    </h2>
                                                                                                            <ul className="text-gray-600 leading-relaxed space-y-2 mb-8 list-disc pr-5">
                                                                                                                      <li>{t('how1')}</li>
                                                                                                                                <li>{t('how2')}</li>
                                                                                                                                          <li>{t('how3')}</li>
                                                                                                                                                    <li>{t('how4')}</li>
                                                                                                                                                            </ul>

                                                                                                                                                                    <div className="border-t border-gray-100 pt-6">
                                                                                                                                                                              <a
                                                                                                                                                                                          href="https://github.com/YOUR-USERNAME/portfolio-landing"
                                                                                                                                                                                                      target="_blank"
                                                                                                                                                                                                                  rel="noreferrer"
                                                                                                                                                                                                                              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-5 py-2.5 transition text-sm"
                                                                                                                                                                                                                                        >
                                                                                                                                                                                                                                                    {t('github')}
                                                                                                                                                                                                                                                              </a>
                                                                                                                                                                                                                                                                      </div>
                                                                                                                                                                                                                                                                            </div>
                                                                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                                                                  );
                                                                                                                                                                                                                                                                                  }