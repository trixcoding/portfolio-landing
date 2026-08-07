import { useTranslations } from 'next-intl';
import { Link } from '../../i18n/navigation';
import {getLocale} from 'next-intl/server';
export default function AboutPage() {
  const t = useTranslations('About');
  const locale = await getLocale(); 
 
  return (
    <div className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-2xl mx-auto">
        <Link href="/" className="text-blue-600 hover:underline text-4xl">
       {locale === 'en' ? '→' : '←'}
        </Link> 

        <span className="inline-block bg-blue-50 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mt-4 mb-3">
          {t('badge')}
        </span>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          {t('title')}
        </h1>
        <p className="text-gray-600 leading-relaxed mb-8">{t('intro')}</p>

        <h2 className="text-lg font-bold text-gray-900 mb-4">
          {t('tableTitle')}
        </h2>
        <div className="border border-gray-200 rounded-xl overflow-hidden mb-8">
          <table className="w-full text-start text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-4 py-3 font-medium">{t('colPart')}</th>
                <th className="px-4 py-3 font-medium">{t('colHow')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              <tr>
                <td className="px-4 py-3 text-gray-900">{t('rowRouting')}</td>
                <td className="px-4 py-3 text-gray-600">
                  {t('rowRoutingDesc')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">{t('rowMessages')}</td>
                <td className="px-4 py-3 text-gray-600">
                  {t('rowMessagesDesc')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">{t('rowDirection')}</td>
                <td className="px-4 py-3 text-gray-600">
                  {t('rowDirectionDesc')}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-gray-900">{t('rowRender')}</td>
                <td className="px-4 py-3 text-gray-600">
                  {t('rowRenderDesc')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="border-t border-gray-100 pt-6">
          <a
            href="https://github.com/trixcoding/portfolio-landing"
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