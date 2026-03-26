export default function SectionHeader({
  title,
  subtitle,
  ctaLabel,
  onCtaClick,
  variant = 'default',
}) {
  const baseClass = variant === 'ppl' ? 'ppl-header' : 'section-header';

  return (
    <div className={baseClass}>
      <div className={`${baseClass}__left`}>
        <h2 className={`${baseClass}__title`}>{title}</h2>
        {subtitle ? <p className={`${baseClass}__subtitle`}>{subtitle}</p> : null}
      </div>
      {ctaLabel ? (
        <div className={`${baseClass}__right`}>
          <button className={`${baseClass}__cta`} onClick={onCtaClick} type="button">
            {ctaLabel}
          </button>
        </div>
      ) : null}
    </div>
  );
}
