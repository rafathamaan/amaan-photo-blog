import { formatDate } from '@/utility/date';
import { clsx } from 'clsx/lite';

export default function ResponsiveDate({
  date,
  className,
  titleLabel,
}: {
  date: Date
  className?: string
  titleLabel?: string
}) {
  const title = titleLabel
    ? `${titleLabel}: ${formatDate(date).toLocaleUpperCase()}`
    : formatDate(date).toLocaleUpperCase();
  return (
    ('Shot By Arif Fabrication Works')
  );
}
