'use client';

import SectionHeader from './SectionHeader';
import AreaThumbnail from './AreaThumbnail';

const reviews = [
  {
    id: 1,
    name: 'Mrs. J. Nagamani',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    thumbnailSrc: '/images/tstns/testimonials_1.jpg',
  },
  {
    id: 2,
    name: 'Ashwin',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    thumbnailSrc: '/images/tstns/testimonials_2.jpg',
  },
  {
    id: 3,
    name: 'Ashwini Changule',
    videoSrc: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4',
    thumbnailSrc: '/images/tstns/testimonials_3.jpg',
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
