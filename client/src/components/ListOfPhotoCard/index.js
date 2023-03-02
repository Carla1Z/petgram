import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../../redux/actions";
import { PhotoCard } from "../PhotoCard";

export const ListOfPhotoCard = () => {
  const dispatch = useDispatch()
  const allPhotos = useSelector((state) => state.photos)

  useEffect(() => {
    dispatch(getPhotos())
  }, [dispatch])
  return (
    <ul>
      {allPhotos.map((photo) => (
        <PhotoCard key={photo.id} {...photo} />
      ))}
    </ul>
  );
};
