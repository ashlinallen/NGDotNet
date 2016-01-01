namespace NGDotNet.DAL.Migrations
{
    using DAL;
    using Model.Models;
    using System.Data.Entity.Migrations;

    internal sealed class Configuration : DbMigrationsConfiguration<EfContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "SampleEF6.Model.EfContext";
        }

        protected override void Seed(EfContext context)
        {
            context.Avengers.AddOrUpdate(
              p => p.Name,
              new Avenger
              {
                  Name = "Black Widow/Natasha Romanoff",
                  Description = "Natasha Romanoff, also known as Black Widow, is a world-renowned super spy and one of S.H.I.E.L.D.'s top agents. Her hand-to-hand combat skills, intelligence, and unpredictability make her a deadly secret weapon. True to her mysterious nature, Black Widow comes and goes as she pleases, but always appears exactly when her particular skills are needed.",
                  Thumbnail = "black_widow.jpg"
              },
              new Avenger
              {
                  Name = "Captain America/Steve Rogers",
                  Description = "During World War II, Steve Rogers enlisted in the military and was injected with a super-serum that turned him into super-soldier Captain America! He's a skilled strategist and even more skilled with his shield, but it's his courage and good heart that makes Captain America both a leader and a true hero.",
                  Thumbnail = "captain_america.jpg"
              },
              new Avenger
              {
                  Name = "Falcon/Sam Wilson",
                  Description = "Recruited from S.H.I.E.L.D. by his hero and mentor Tony Stark, Falcon is the Avengers' newest and youngest recruit. Like Tony, Sam is a genius with machines and technology. What he lacks in experience, Sam makes up in enthusiasm and determination. Falcon's suit of armor comes fully stocked with holographic wings, explosive flechettes, and retractable talons.",
                  Thumbnail = "falcon.jpg"
              },
              new Avenger
              {
                  Name = "Hawkeye/Clint Barton",
                  Description = "Hawkeye is an expert archer with an attitude just as on-target as his aim. His stealth combat experience and his ability to hit any target with any projectile make him a valuable member of the Avengers. However, he refuses to let things get too serious, as he has as many jokes as he does arrows!",
                  Thumbnail = "hawkeye.jpg"
              },
              new Avenger
              {
                  Name = "Hulk/Bruce Banner",
                  Description = "Scientist Bruce Banner was transformed into the Hulk as a result to gamma radiation exposure. Over 8 feet tall and weighing 1,040 pounds, it's Hulk's strength that makes him the strongest hero in the Marvel Universe! Hulk smashes all threats that dare disturb the peace and friendship he has found in the Avengers.",
                  Thumbnail = "hulk.jpg"
              },
              new Avenger
              {
                  Name = "Iron Man/Tony Stark",
                  Description = "Tony Stark is the genius inventor/billionaire/philanthropist owner of Stark Industries. With his super high-tech Iron Man suit, he is practically indestructible, able to fly, and has a large selection of weapons to choose from - but it's Tony's quick thinking and ability to adapt and improvise that make him an effective leader of the Avengers.",
                  Thumbnail = "iron_man.jpg"
              },
              new Avenger
              {
                  Name = "Thor",
                  Description = "Thor is the Asgardian Prince of Thunder, the son of Odin, and the realm's mightiest warrior. He loves the thrill of battle and is always eager to show off his power to the other Avengers, especially the Hulk. Thor's legendary Uru hammer, Mjolnir, gives him the power to control thunder and the ability to fly. He's found a new home on Earth and will defend it as his own... even if he doesn't understand its sayings and customs.",
                  Thumbnail = "thor.jpg"
              }
            );
        }
    }
}