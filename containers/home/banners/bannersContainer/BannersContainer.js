import React, { Fragment, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Swiper from "react-native-swiper";
import { bannerService } from "../../../../services";
import { BannerItem } from "../bannerItem/Index";

const BannersContainer = () => {
  const [banners, setBanners] = useState([]);

  const fetchBanners = async () => {
    try {
      const response = await bannerService.getBanners();
      setBanners(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchBanners();
  }, []);

  return (
    <View style={styles.container}>
      <Swiper
        loop={false}
        autoplay={true}
        autoplayTimeout={3}
        style={styles.swiper}
        showsPagination={false}
        showsButtons={false}
      >
        {banners.length > 0 &&
          banners.map((banner, index) => (
            <Fragment key={index}>
              <BannerItem
                title={banner.title}
                thumbnailUrl={banner.thumbnailUrl}
                description={banner.description}
                href={banner.linkTo}
                bg={banner.bg}
                btnColor={banner.btnColor}
                btnText={banner.btnText}
              />
            </Fragment>
          ))}
      </Swiper>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: "hidden",
    maxHeight: 230,
  },
  swiper: {
    height: 230,
    overflow: "hidden",
  },
  bannerItem: {
    height: 230,
    position: "relative",
    width: "100%",
    overflow: "hidden", // Cắt phần nội dung thừa
  },
});

export default BannersContainer;
