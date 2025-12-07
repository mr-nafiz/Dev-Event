import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { IEvent } from "@/database";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
export default async function Home() {
  const reponse = await fetch(`${BASE_URL}/api/events`);
  const { events } = await reponse.json();
  return (
    <section>
      <h1 className="text-center">
        The hub for every dev <br />
        event you can't mis
      </h1>
      <p className="text-center mt-5">
        Hackathons, Meetups and Conferences, All in one place
      </p>
      <ExploreBtn />

      <div className="mt-20 space-y-7">
        <ul>
          <h3>Featured Events</h3>
        </ul>

        <ul className="events">
          {events &&
            events.length > 0 &&
            events.map((event: IEvent) => (
              <EventCard key={event.title} {...event} />
            ))}
        </ul>
      </div>
    </section>
  );
}
