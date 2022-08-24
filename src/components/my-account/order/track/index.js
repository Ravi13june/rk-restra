import React, { useState } from "react";
import MyAccount from "../../common/MyAccount";
// import GoogleMapReact from "google-map-react";
// import { GoogleMapReact_KEY } from "../../../../config";

const TrackOrder = (props) => {
  // const [map, setMap] = useState({
  //   center: [34.0522, -118.2437],
  //   zoom: 10,
  // });
  // const handleApiLoaded = (map, maps) => {
  //   // use map and maps objects
  // };

  return (
    <MyAccount>
      <div className="p-4 bg-white shadow-sm">
        <h4 className="font-weight-bold mt-0 mb-4">Track Order</h4>
        <div className="bg-white card mb-4 shadow-sm">
          {/*<GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapReact_KEY }}
            defaultCenter={map.center}
            defaultZoom={map.zoom}
            yesIWantToUseGoogleMapApiInternals
            className={"ok"}
            onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text="My Marker"
            />
          </GoogleMapReact>*/}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224331.7138249739!2d77.2261395507808!3d28.534217855375896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1623325532839!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="title"
          />
        </div>
      </div>
    </MyAccount>
  );
};

export default TrackOrder;
