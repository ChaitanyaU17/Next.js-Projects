import { Fragment, useEffect, useState } from "react";

function MeetupDetails() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // This will ensure that the dynamic content only shows up after the first render.
    setLoaded(true);
  }, []);

  return (
    <Fragment>
      {loaded && (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/View_of_Santa_Maria_del_Fiore_in_Florence.jpg/480px-View_of_Santa_Maria_del_Fiore_in_Florence.jpg"
          alt="A first meetup"
        />
      )}
      <h1>A First Meetup</h1>
      <address>Ashvi bk , 173, colony</address>
      <p>a meetup description paragraph</p>
    </Fragment>
  );
}

export default MeetupDetails;
