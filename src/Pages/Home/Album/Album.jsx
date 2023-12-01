import PhotoAlbum from "react-photo-album";

const Album = () => {
  return (
    <div >
      <PhotoAlbum
        layout="masonry"
        photos={[
          {
            src: "https://fairmountpetservice.com/Blog/wp-content/uploads/2018/12/first-time-dog-owner.jpg",
            width: 800,
            height: 600,
          },
          {
            src: "https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-carpet-for-pets-2022-hero.jpg",
            width: 800,
            height: 600,
          },
          {
            src: "https://www.southernazvets.com/wp-content/uploads/2022/07/Cats-Make-Great-Pets.jpg",
            width: 800,
            height: 600,
          },
          {
            src: "https://embed-ssl.wistia.com/deliveries/8ef5fd37c17b0c00d6645da92d11c0a8c19603f8.webp?image_crop_resized=960x540",
            width: 800,
            height: 600,
          },
          {
            src: "https://www.thesprucepets.com/thmb/wDwU14vPAAGa6sl9V0hdIrJggpI=/3600x0/filters:no_upscale():strip_icc()/cute-dog-breeds-we-can-t-get-enough-of-4589340-hero-04aba92c6fbb4651b7fa1f54823a1a6d.jpg",
            width: 800,
            height: 600,
          },
          
        ]}
      />
    </div>
  );
};

export default Album;
