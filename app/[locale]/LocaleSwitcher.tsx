'use client';

import { usePathname, useRouter } from '../i18n/navigation';
import { useLocale } from 'next-intl';

export default function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchTo = locale === 'fa' ? 'en' : 'fa';

  return (
    <button
      onClick={() => router.replace(pathname, { locale: switchTo })}
      className="text-sm text-gray-400 hover:text-blue-600 transition"
    >
      {switchTo === 'fa' ? 'فارسی' : 'English'}
    </button>
  );
}