'use client';

import SectionHeader from './SectionHeader';
import AreaThumbnail from './AreaThumbnail';

const reviews = [
  {
    id: 1,
    name: 'Emily W.',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Sarah D.',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 3,
    name: 'Jennifer M.',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailSrc: 'https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&w=800&q=80',
  },
];

export default function WhyPeopleLove() {
  const handleAddReview = () => {
    console.log('Add Your Review clicked');
  };

  const handlePlayVideo = (review) => {
    console.log(`Playing video for ${review.name}`);
  };

  return (
    <section className="why-people-love">
      <div className="why-people-love__container">
        <SectionHeader
          title="Why People Love Dental Wellness"
          subtitle="We take pride in providing exceptional dental care and creating positive experiences for our patients."
          ctaLabel="Add Your Review"
          onCtaClick={handleAddReview}
          variant="ppl"
        />
        <div className="why-people-love__grid">
          {reviews.map((review) => (
            <AreaThumbnail
              key={review.id}
              videoSrc={review.videoSrc}
              label={review.name}
              variant="review"
              onClick={() => handlePlayVideo(review)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
