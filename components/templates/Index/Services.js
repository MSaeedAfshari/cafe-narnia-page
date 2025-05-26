import ServiceItem from "@/components/modules/ServiceItem/ServiceItem";
import React from "react";

export default function Services() {
  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4
            class="text-primary text-uppercase"
            style={{ letterSpacing: "5px" }}
          >
            Our Services
          </h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">
          <ServiceItem
            title="Fastest Door Delivery"
            description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor"
            img="img/service-1.jpg"
            icon="faTruck"
          />
          <ServiceItem
            title="Fresh Coffee Beans"
            description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor"
            img="img/service-2.jpg"
            icon="faCoffee"
          />
          <ServiceItem
            title="Best Quality Coffee"
            description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor"
            img="img/service-3.jpg"
            icon="faAward"
          />
          <ServiceItem
            title="Online Table Booking"
            description="Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et
                  et lorem dolor sed est sit invidunt, dolore tempor diam ipsum
                  takima erat tempor"
            img="img/service-4.jpg"
            icon="faTable"
          />
        </div>
      </div>
    </div>
  );
}
