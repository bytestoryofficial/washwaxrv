/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { Slide } from 'react-slideshow-image';
import { useEffect, useState } from 'react';

import { BaseContainer, BaseReveal } from 'UI';
import GalleryRoot, {
  GalleryInner,
  GalleryTitle,
  SlideHead,
  SlideItem,
  SlideItemWrapper,
  SlideWrapper,
} from './Gallery.styled';

import useHome from 'store/slices/home/useHome';
import { BASE_API } from 'api/api';
import { isMOV } from 'helpers/checker';

const Gallery = () => {
  const { getGallery } = useHome();

  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    getGallery().then((response) => {
      if (response?.results) {
        const results = response.results;
        setGallery(results);
      }
    });
  }, []);

  return (
    <GalleryRoot id="gallery">
      <BaseContainer>
        <BaseReveal width="100%">
          <GalleryTitle>Gallery</GalleryTitle>
        </BaseReveal>

        <GalleryInner>
          {gallery.length > 0 && (
            <Slide autoplay={false} infinite>
              {gallery?.map((image, index) => (
                <BaseReveal width="100%" key={index}>
                  <SlideWrapper className="each-slide-effect">
                    {image?.file_before && (
                      <SlideItemWrapper>
                        <SlideHead>Before</SlideHead>
                        {isMOV(image?.file_before) ? (
                          <SlideItem>
                            <video width="100%" height="100%" preload controls>
                              <source
                                src={`${BASE_API}/${image?.file_before}`}
                                type="video/mp4"
                              />
                            </video>
                          </SlideItem>
                        ) : (
                          <SlideItem
                            style={{
                              backgroundImage: `url(${BASE_API}/${image?.file_before})`,
                            }}
                          ></SlideItem>
                        )}
                      </SlideItemWrapper>
                    )}

                    <SlideItemWrapper>
                      {image?.file_before ? (
                        <SlideHead>After</SlideHead>
                      ) : (
                        <SlideHead></SlideHead>
                      )}
                      {isMOV(image?.file_after) ? (
                        <SlideItem>
                          <video width="100%" height="100%" preload controls>
                            <source
                              src={`${BASE_API}/${image?.file_after}`}
                              type="video/mp4"
                            />
                          </video>
                        </SlideItem>
                      ) : (
                        <SlideItem
                          style={{
                            backgroundImage: `url(${BASE_API}/${image?.file_after})`,
                          }}
                        ></SlideItem>
                      )}
                    </SlideItemWrapper>
                  </SlideWrapper>
                </BaseReveal>
              ))}
            </Slide>
          )}
        </GalleryInner>
      </BaseContainer>
    </GalleryRoot>
  );
};

export default Gallery;
