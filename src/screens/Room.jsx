import React from 'react';
import Header from '../components/Header';
import Cards from '../components/Cards';
import './Room.css'; // Optional if you're using external CSS
import Footer from '../components/Footer';

const Room = () => {
  return (
    <div>
      <Header />
      <div className="card-container container" style={{ marginTop: '80px' }}>
        <Cards roomno={'A19'} title={'"Luxury King Suite with City View'} desc={'Price: $350/night'} image={'https://qtxasset.com/quartz/qcloud1/media/image/CaptionbyHyattMemphis-king-room--PhilipMurphy-Photography.jpg?VersionId=_P.RPZ1SjMbGa9uXexxtgSw3pWPd3jFb'} />
        <Cards roomno={'A123'} title={'Cozy Double Room Near the Beach'} desc={'Price: $180/night'} image={'https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2020/10/01/1620/Caption-by-Hyatt-P002-Guestroom.jpg/Caption-by-Hyatt-P002-Guestroom.16x9.jpg'} />
        <Cards roomno={'A986'} title={'"Modern Studio Apartment with Balcony'} desc={'Price: $220/night'} image={'https://www.cvent.com/sites/default/files/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg'} />
        <Cards roomno={'B286'} title={"Charming Cottage with Garden Access"} desc={'Price: $150/night'} image={'https://media.istockphoto.com/id/1390233984/photo/modern-luxury-bedroom.jpg?s=612x612&w=0&k=20&c=po91poqYoQTbHUpO1LD1HcxCFZVpRG-loAMWZT7YRe4='} />
        <Cards roomno={'B232'} title={'"Elegant Deluxe Room with Oceanfront"'} desc={'Price: $400/night'} image={'https://t3.ftcdn.net/jpg/06/19/00/08/360_F_619000872_AxiwLsfQqRHMkNxAbN4l5wg1MsPgBsmo.jpg'} />
        <Cards roomno={'B383'} title={'"Budget-Friendly Single Room in Downtown"'} desc={'Price: $90/night'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4UlVfbXpFKiYPHYsNn0E1op-q1S3yva15Hg&s'} /> 
        <Cards roomno={'C765'} title={'"Spacious Family Suite with Two Bedrooms'} desc={'Price: $270/night'} image={'https://thumbs.dreamstime.com/b/hotel-room-beautiful-orange-sofa-included-43642330.jpg'} />
        <Cards roomno={'C776'} title={'"Romantic Getaway Suite with Jacuzzi'} desc={'Price: $320/night'} image={'https://imageio.forbes.com/specials-images/imageserve/5cdb058a5218470008b0b00f/Nobu-Ryokan-Malibu/0x0.jpg?format=jpg&height=1009&width=2000'}/>
        <Cards roomno={'C236'} title={'"Penthouse Suite with Panoramic Views"'} desc={'Price: $600/night'} image={'https://www.luxsphere.co/wp-content/uploads/Six-Sense-Punakha-hotels-with-the-best-view-.jpg'}/>
        <Cards roomno={'D263'} title={'"Standard Queen Room with Free Breakfast'} desc={'Price: $140/night '} image={'https://t3.ftcdn.net/jpg/02/71/08/28/360_F_271082810_CtbTjpnOU3vx43ngAKqpCPUBx25udBrg.jpg'}/>
        <Cards roomno={'D3526'} title={'"Beachfront Bungalow with Private Deck"'} desc={'Price: $450/night'} image={'https://media.cnn.com/api/v1/images/stellar/prod/140127103345-peninsula-shanghai-deluxe-mock-up.jpg?q=w_2226,h_1449,x_0,y_0,c_fill'}/>
        <Cards roomno={'D787'} title={'"Luxury Villa with Private Pool"'} desc={'Price: $550/night'} image={'https://thumbs.dreamstime.com/b/hotel-rooms-8146308.jpg'}/>
        <Cards roomno={'E567'} title={'Price: $450/night'} desc={'Price: $200/night'} image={"https://img.freepik.com/free-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-living_105762-2018.jpg"}/>
        <Cards roomno={'E537'} title={'Contemporary Loft in the Heart of the City'} desc={'Price: $250/night'} image={'https://cdn.pixabay.com/photo/2016/03/28/09/34/bedroom-1285156_640.jpg'}/>
        <Cards roomno={'F445'} title={'"Executive Suite with Office Space'} desc={'Price: $380/night'} image={'https://www.ticasino.com/uploads/_800xAUTO_crop_center-center_none/Hotel_Double_Queen_1200X800.jpg'}/>
        <Cards roomno={'G556'} title={'"Rustic Lodge Room in Nature Reserve"'} desc={'Price: $160/night'} image={'https://www.theradiohotel.com/wp-content/uploads/2023/11/RADIO_Standard_Gallery-1.jpg'}/>
        <Cards roomno={'FR33'} title={'"Eco-Friendly Room with Sustainable Amenities"'} desc={'Price: $190/night'} image={'https://www.moorhallhotel.co.uk/assets/slideshows/deluxe-rooms-quick-slideshow/d7fd48d1b2/Moor-Hall-Hotel-Spa-Hot-Tub-Room-188__FocusFillWyIwLjAwIiwiMC4wMCIsMTkyMCw4OTJd_ScaleMaxWidthWzE5MjBd.jpg'}/>
        <Cards roomno={'G556'} title={'"Comfortable Twin Room with Garden View'} desc={'Price: $130/night'} image={'https://compote.slate.com/images/3a80009e-24e2-4bf0-9cd0-99ef4d4a5255.jpg?height=346&width=568'}/>

      </div>
      <Footer/>
    </div>
  );
};

export default Room;
