import {
  INFINITE_SCROLL_FEED_INITIAL,
  INFINITE_SCROLL_FEED_MULTIPLE,
  Photo,
} from '.';
import PhotosLarge from './PhotosLarge';
import PhotosLargeInfinite from './PhotosLargeInfinite';

export default function PhotoFeedPage({
  photos,
  photosCount,
}:{
  photos: Photo[]
  photosCount: number
}) {
  return (
    <div className='space-y-1 flex w-full h-full transition-transform duration-300 ease-in-out transform group-hover:scale-110 '>
      <PhotosLarge {...{ photos }} />
      {photosCount > photos.length &&
        <PhotosLargeInfinite
          initialOffset={INFINITE_SCROLL_FEED_INITIAL}
          itemsPerPage={INFINITE_SCROLL_FEED_MULTIPLE}
        />}
    </div>
  );
}
