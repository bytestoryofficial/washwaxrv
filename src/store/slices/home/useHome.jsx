import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useMemo } from 'react';

import {
  contactUsAction,
  createReviewAction,
  getGalleryAction,
  getMapCoordsAction,
  getReviewsAction,
  getServicesAction,
} from './actions';

const useHome = () => {
  const dispatch = useDispatch();
  const {
    loading,
    error,
    success,
    coordinates,
    services,
    gallery,
    reviews,
    contactInfo,
  } = useSelector((state) => state.home);
  const homeLoading = loading === 'loading';

  const galleryImages = useMemo(() => gallery.results, [gallery]);
  const galleryPrev = useMemo(() => gallery.previous, [gallery]);
  const galleryNext = useMemo(() => gallery.next, [gallery]);

  const allReviews = useMemo(() => reviews.results, [reviews]);
  const info = useMemo(() => {
    const response = contactInfo[0];
    return response?.params;
  }, [contactInfo]);

  const contactUs = useCallback(
    async (payload) => {
      const response = await dispatch(contactUsAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const getServices = useCallback(
    async (payload) => {
      const response = await dispatch(getServicesAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  const getGallery = useCallback(
    async (parameters) => {
      const response = await dispatch(getGalleryAction(parameters));
      return response.payload;
    },
    [dispatch],
  );

  const getReviews = useCallback(
    async (parameters) => {
      const response = await dispatch(getReviewsAction(parameters));
      return response.payload;
    },
    [dispatch],
  );

  const getContactInfo = useCallback(
    async (parameters) => {
      const response = await dispatch(getMapCoordsAction(parameters));
      return response.payload;
    },
    [dispatch],
  );

  const createReview = useCallback(
    async (payload) => {
      const response = await dispatch(createReviewAction(payload));
      return response.payload;
    },
    [dispatch],
  );

  return {
    createReview,
    getGallery,
    getServices,
    reviews,
    homeLoading,
    error,
    success,
    coordinates,
    gallery,
    allReviews,
    getContactInfo,
    info,
    contactUs,
    services,
    galleryImages,
    galleryPrev,
    galleryNext,
    getReviews,
    contactInfo,
  };
};

export default useHome;
