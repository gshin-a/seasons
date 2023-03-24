const Introduction = ({ setSpringState }) => {
  return (
    <div className="intro">
      <h1>Introduction to Spring in Korea</h1>
      <div>
        Spring is a highly anticipated season in Korea, as it marks the end of
        the long, cold winter and the start of a new beginning. From late March
        to early May, the country transforms into a vibrant wonderland with
        cherry blossoms blooming, warm sunshine, and pleasant temperatures. In
        this introduction, we will explore several subheadings that will give
        foreigners an understanding of what to expect during springtime in
        Korea.
      </div>
      <br />
      <h2>Climate and Temperatures</h2>
      <div>
        Spring is a pleasant season in Korea with mild temperatures and
        comfortable weather conditions. The spring season in Korea typically
        lasts from late March to early May, and during this time, the average
        temperature ranges from 10 to 20 degrees Celsius (50 to 68 degrees
        Fahrenheit).
        <br />
        <br />
        In the early spring months of March and April, the weather can be
        slightly chilly, particularly in the mornings and evenings. However, as
        the season progresses, temperatures gradually rise, making it an ideal
        time for outdoor activities like hiking, picnicking, and sightseeing.
        <br />
        <br />
        The spring climate in Korea is generally dry and sunny, with clear blue
        skies and low humidity levels. However, there may be occasional rain
        showers, especially in late April and early May. Therefore, it is
        advisable to bring an umbrella or raincoat when visiting Korea during
        the spring season.
        <br />
        <br />
        Overall, the spring climate in Korea is perfect for outdoor activities
        and exploring the country's natural beauty. Whether it's admiring the
        blooming cherry blossoms or hiking through scenic national parks,
        visitors can enjoy the comfortable temperatures and pleasant weather
        conditions that the spring season brings to Korea.
      </div>
      <br />
      <h2>Blossom Season</h2>
      <div>
        Korea's spring Blossom Season is a magical time when the country's
        landscapes are transformed by the beauty of blooming flowers. The most
        famous of these blooms are cherry blossoms. These pink and white flowers
        usually begin to bloom in late March or early April, depending on the
        weather conditions.
        <br />
        <br />
        One of the most popular places to see cherry blossoms in Korea is at
        Yeouido Park in Seoul. This park is home to more than 1,800 cherry
        blossom trees and attracts thousands of visitors each year. Other
        popular cherry blossom viewing spots include the Gyeongbokgung Palace,
        Seokchon Lake, and the Jinhae Cherry Blossom Festival, which is held
        annually in the city of Jinhae.
        <br />
        <br />
        In addition to cherry blossoms, there are also other types of flowers
        that bloom during Korea's spring Blossom Season. For example, magnolia
        trees bloom in early spring and are known for their large, fragrant
        flowers. Azaleas, rhododendrons, and forsythias are other flowers that
        bloom during this time of year.
        <br />
        <br />
        During spring Blossom Season, many Koreans take part in outdoor
        activities like picnicking, hiking, and cycling to enjoy the beautiful
        flowers and warm weather. It's also a popular time for festivals and
        cultural events, such as the Lotus Lantern Festival and the Seoul
        Lantern Festival.
        <br />
        <br />
        Overall, Korea's spring Blossom Season is a time of beauty, renewal, and
        celebration, and it's definitely worth experiencing if you have the
        opportunity to do so.
      </div>
      <br />
      <h2>Spring Festivals and Events</h2>
      <div>
        Korea's spring season is a time of celebration and renewal, and there
        are many festivals and events that take place throughout the country
        during this time. These events celebrate the arrival of spring and
        showcase the beauty of nature, as well as Korean culture and traditions.
        <br />
        <br />
        Some of the most popular spring festivals and events in Korea include
        the Jinhae Cherry Blossom Festival, the Yeouido Spring Flower Festival,
        and the Goyang International Flower Festival, which all feature stunning
        displays of spring flowers, cultural performances, and food vendors.
        Other festivals and events, such as the Lotus Lantern Festival, provide
        unique and memorable experiences that showcase Korean traditions and
        customs
        <br />
        <br />
        Whether you're interested in enjoying the beautiful spring scenery,
        experiencing traditional Korean culture, or simply having fun with
        friends and family, there is something for everyone at Korea's spring
        festivals and events. These celebrations are a great way to welcome the
        arrival of spring and create unforgettable memories.
      </div>
      <br />
      <button
        onClick={() => {
          setSpringState("activity");
          window.scroll(0, 0);
        }}
      >
        &raquo; look into more about Spring Festival and Events
      </button>
      <br />
      <br />
      <h2>Spring Food and Cuisine</h2>
      <div>
        Korean spring cuisine is all about using fresh, seasonal ingredients
        that are abundant during this time of the year. Spring in Korea brings
        an array of vibrant vegetables, herbs, and seafood that are used to
        create dishes bursting with flavor and color.
        <br />
        <br />
        One of the most iconic spring dishes in Korea is kkaennip-jeon, or
        perilla leaf pancakes, made by dipping perilla leaves in a batter of
        flour, egg, and ground pork, and frying them until crispy. Another
        popular dish is chwinamul, a dish made with young spring greens such as
        fernbrake or bracken, blanched and seasoned with soy sauce, sesame oil,
        garlic, and green onions.
        <br />
        <br />
        Seafood is also an essential part of Korean spring cuisine, and raw
        fish, grilled squid, and stir-fried clams are popular choices.
        Freshwater vegetables such as watercress and shepherd's purse are often
        stir-fried or blanched and served with a simple dressing of soy sauce
        and sesame oil.
        <br />
        <br />
        As the weather warms up, Koreans also enjoy refreshing cold soups such
        as naengmyeon, made with chewy buckwheat noodles and served with a tangy
        broth of vinegar and mustard, and dongchimi-guksu, a soup made with
        refreshing radish water kimchi and noodles.
        <br />
        <br />
        To satisfy the sweet tooth, Koreans also have spring-themed desserts
        such as hwajeon, rice cakes made with edible spring flowers, and dasik,
        bite-sized traditional sweets made with rice flour, nuts, and honey.
        <br />
        <br />
        Overall, Korean spring cuisine is all about embracing the new season
        with fresh and vibrant flavors. Whether you're a foodie or just looking
        to try something new, Korean spring cuisine offers a delightful culinary
        experience that celebrates the beauty of spring.
      </div>
      <br />
      <button
        onClick={() => {
          setSpringState("activity");
          window.scroll(0, 0);
        }}
      >
        &raquo; look into more about Spring Food and Cuisine
      </button>
      <br />
      <br />
      <h2>Conclusion</h2>
      <div>
        Spring in Korea is a beautiful and exciting time of the year. From
        cherry blossom festivals to seasonal cuisine, there is something for
        everyone to enjoy. The mild weather and vibrant scenery make it an
        excellent time for outdoor activities and exploring the country. So,
        pack your bags and get ready to experience the wonder of spring in
        Korea!
      </div>
    </div>
  );
};

export default Introduction;
