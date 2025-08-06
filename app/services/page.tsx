// "use client"
import "./services.scss";
import { servicesList } from "../assets/fake-db/fake-db";
import Link from "next/link";
import Image from "next/image";
const Services = async () => {
  const art = await fetch("https://fakestoreapi.com/products/");
  const artWork = await art.json();
  console.log("art", artWork);

  let serviceCards = artWork.map((item: any) => (
    <Link
      href={"/services/" + item.title.replace(/\s+/g, "-")}
      key={item.title}
      className="img-holder shadow-2xl"
    >
      {item.image ? (
        <>
          <div className="img-wrapper">
            <Image
              width={500}
              height={500}
              style={{ objectFit: "contain", width: "100%" }}
              className=""
              src={item?.image}
              alt={item?.title}
            />
          </div>
          <div className="content">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </>
      ) : (
        <div>
          <h3>{item.title}</h3>
        </div>
      )}

      {/* <div className="text-col">
        <h3 className="service-title">{paint.title}</h3>
        {paint.description && <p className="service-desc">{paint.description}</p>}
        {paint.list?.length > 0 && (
          <ul className="service-list">
            {paint.list?.map((s:any) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        )
        }
      </div>
      <div className="img-col">
        <Image
          src={paint?.thumbnail?.lqip}
          alt={paint?.thumbnail?.alt_text}
          width={500}
          height={500}
        />
      </div> */}
    </Link>
  ));
  return (
    <section className="services-page">
      <div className="services-container">
        {/* <div className="grid grid-cols-4 md:grid-cols-4 gap-4"> */}
        {serviceCards}
        {/* </div> */}
      </div>
    </section>
  );
};

export default Services;
