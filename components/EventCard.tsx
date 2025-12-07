import Image from "next/image";
import Link from "next/link";

interface EventCardProps {
  title: string;
  slug: string;
  date: string;
  location: string;
  time: string;
  image: string;
}

const EventCard = ({
  title,
  slug,
  date,
  location,
  time,
  image,
}: EventCardProps) => {
  return (
    <Link href={`/event/${slug}`} id="event-card">
      <Image
        src={image}
        alt={title}
        width={400}
        height={200}
        className="poster"
      />
      <div className="flex flex-row gap-2">
        <Image src={"/icons/pin.svg"} alt="location" width={16} height={16} />
        <p>{location}</p>
      </div>
      <p className="title">{title}</p>
      <div className="datetime">
        <div>
          <Image
            src={"/icons/calendar.svg"}
            alt="date"
            width={16}
            height={16}
          />
          <p>{date}</p>
        </div>
        <div>
          <Image src={"/icons/clock.svg"} alt="time" width={16} height={16} />
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
