import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  articles = [
    {
      source: {
        id: null,
        name: "India TV News",
      },
      author: "Written by Jishu Bhattacharya",
      title:
        "IND vs NZ 3rd T20 Live Cricket Score: India on top as New Zealand 8 down - India TV News",
      description:
        "IND vs NZ 3rd T20 Live Cricket Score: The Narendra Modi Stadium is all set to host India and New Zealand in the series decider. India have already defeated New Zealand by a margin of 3-0 in the ODI series and it is now time for them to outplay the Kiwis in th…",
      url: "https://www.indiatvnews.com/sports/cricket/ind-vs-nz-live-score-india-vs-new-zealand-3rd-t20-final-cricket-match-online-updates-narendra-modi-stadium-ahmedabad-ball-by-ball-commentary-updates-2023-02-01-844003",
      urlToImage:
        "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2023/02/india-vs-new-zealand-1st-t20i-live-2-1675254657.jpg",
      publishedAt: "2023-02-01T15:46:24Z",
      content:
        "Shubman Gill, Ishan Kishan(w), Rahul Tripathi, Suryakumar Yadav, Hardik Pandya(c), Deepak Hooda, Washington Sundar, Shivam Mavi, Kuldeep Yadav, Umran Malik, Arshdeep Singh",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        "India vs New Zealand, 3rd T20I, Live Score: Shubman Gill Slams Maiden Fifty As India Cruise vs New Zealand - NDTV Sports",
      description:
        "IND vs NZ, 3rd T20I Live: Shubman Gill and Hardik Pandya are standing unbeaten at the crease after India lost three wickets against New Zealand in the third and final T20I match, at the Narendra Modi Stadium in Ahmedabad on Wednesday",
      url: "https://sports.ndtv.com/india-vs-new-zealand-2023/india-vs-new-zealand-3rd-t20-match-ind-vs-nz-live-score-updates-3743442",
      urlToImage:
        "https://c.ndtvimg.com/2023-01/ac3cvoa_shubman-gill-afp_625x300_29_January_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-02-01T14:31:51Z",
      content:
        "IND vs NZ, 3rd T20I Live Updates: Shubman Gill and Hardik Pandya are standing unbeaten at the crease after India lost three wickets against New Zealand in the third and final T20I match, at the Naren… [+1149 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "Gulf Giants vs MI Emirates, 24th Match, International League T20, 2023 - Cricbuzz",
      description:
        "Follow Gulf Giants vs MI Emirates, 24th Match, Feb 01, International League T20, 2023 with live Cricket score, ball by ball commentary updates on Cricbuzz",
      url: "https://www.cricbuzz.com/cricket-commentary/59127/gg-vs-mie-24th-match-international-league-t20-2023",
      urlToImage: null,
      publishedAt: "2023-02-01T14:02:47Z",
      content:
        "Timeout! The innings has ebbed and flowed thus far. Emirates started well but the two wickets were followed with a lot of tight bowling as the seamers got something out of the new ball. However, thes… [+187 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title:
        "Watch: Sachin Tendulkar, BCCI felicitate triumphant U19 Women's T20 World Cup team in Ahmedabad - Indiatimes.com",
      description:
        "Cricket News: The Shafali Verma-led Indian team, which recently won the inaugural ICC U19 Women's T20 World Cup in South Africa was on Wednesday felicitated by the",
      url: "https://timesofindia.indiatimes.com/sports/cricket/news/watch-sachin-tendulkar-bcci-felicitate-triumphant-u19-womens-t20-world-cup-team-in-ahmedabad/articleshow/97530577.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-97530564,width-1070,height-580,imgsize-51354,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-02-01T13:55:00Z",
      content:
        '"The entire nation will celebrate and cherish your victory"Master Blaster @sachin_rt delivers a speech at the Nar https://t.co/GqE6wFiYMF\r\n— BCCI (@BCCI) 1675258966000',
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Umar Farooq",
      title:
        "Misbah on PCB rehiring Arthur: 'Slap on Pakistan cricket' - ESPNcricinfo",
      description:
        'Former head coach blames "our own system" for disrespecting and discrediting "our own people" and local coaches',
      url: "https://www.espncricinfo.com/story/misbah-ul-haq-on-pcb-rehiring-mickey-arthur-slap-on-pakistan-cricket-1356843",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/313600/313627.6.jpg",
      publishedAt: "2023-02-01T12:28:24Z",
      content:
        'NewsFormer head coach blames "our own system" for disrespecting and discrediting "our own people" and local coaches',
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "NDTV Sports Desk",
      title:
        '"There\'s Nothing Left": Lionel Messi Drops Retirement Hint, Admits He Has "Achieved Everything" - NDTV Sports',
      description:
        "Lionel Messi lifted the FIFA World Cup trophy for the first time in his career as Argentina defeated France in the final of the tournament.",
      url: "https://sports.ndtv.com/football/theres-nothing-left-lionel-messi-drops-retirement-hint-admits-he-has-achieved-everything-3743804",
      urlToImage:
        "https://c.ndtvimg.com/2022-12/2uuc0d7o_lionel-messi-afp_625x300_22_December_22.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2023-02-01T12:25:01Z",
      content:
        "One of the greatest of all time, Lionel Messi has won virtually everything a footballer come. With seven Ballon d'Or, four UEFA Champions League, one Copa America, and one FIFA World Cup trophy, Mess… [+1823 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricketaddictor.com",
      },
      author: "More by Sonanchal Gautam",
      title:
        "IND vs NZ: Anil Kumble, Parthiv Patel Name Future Superstars Of Indian Cricket - Cricket Addictor",
      description:
        "IND vs NZ: Anil Kumble, Parthiv Patel Name Future Superstars Of Indian Cricket",
      url: "https://cricketaddictor.com/new-zealand-tour-of-india-2023/ind-vs-nz-anil-kumble-parthiv-patel-name-future-superstars-of-indian-cricket/",
      urlToImage:
        "https://i0.wp.com/cricketaddictor.com/wp-content/uploads/2021/12/Anil-Kumble.jpg",
      publishedAt: "2023-02-01T12:05:38Z",
      content:
        "Legendary India National Cricket Team leg-spinner Anil Kumble and former India National Cricket Team wicketkeeper-batter Parthiv Patel have named two young cricketers each, who they feel will be the … [+2267 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "Valkerie Baynes",
      title:
        "Recent Match Report - England vs South Africa 3rd ODI 2022/23 - ESPNcricinfo",
      description:
        "De Kock ruled out, Hendricks plays; Archer returns for England in place of Stone",
      url: "https://www.espncricinfo.com/series/england-in-south-africa-2022-23-1339564/south-africa-vs-england-3rd-odi-1339597/match-report",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/347300/347327.6.jpg",
      publishedAt: "2023-02-01T11:08:16Z",
      content:
        "ReportDe Kock ruled out, Hendricks plays; Archer returns for England in place of Stone",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "South Africa vs England, 3rd ODI, England tour of South Africa, 2023 - Cricbuzz",
      description:
        "Follow South Africa vs England, 3rd ODI, Feb 01, England tour of South Africa, 2023 with live Cricket score, ball by ball commentary updates on Cricbuzz",
      url: "https://www.cricbuzz.com/cricket-commentary/56178/rsa-vs-eng-3rd-odi-england-tour-of-south-africa-2023",
      urlToImage: null,
      publishedAt: "2023-02-01T11:05:02Z",
      content:
        "47.1 Marco Jansen to Buttler, out Caught by Markram!! Buttler departs against the run of play! But, he has put his side in a commanding position on the back of his brilliant ton. A slower off-cutter … [+266 chars]",
    },
    {
      source: {
        id: null,
        name: "Sporting News",
      },
      author: null,
      title:
        "Chelsea sign £106.8m Enzo Fernandez in record transfer as Benfica accept deadline day bid for Argentina mid... - Goal.com",
      description:
        "Get all the latest Soccer news, highlights, scores, schedules, standings and more from Sporting News Canada.",
      url: "https://www.sportingnews.com/ca/soccer",
      urlToImage:
        "https://static.sportingnews.com/1.24.1.1/themes/custom/tsn/logo.jpg",
      publishedAt: "2023-02-01T11:03:45Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "Managing Madrid",
      },
      author: "Lucas Navarrete",
      title:
        "Rayo Vallecano president confirms Real Madrid have signed Fran Garcia - Managing Madrid",
      description: "The defender will join the club next summer.",
      url: "https://www.managingmadrid.com/2023/2/1/23580959/fran-garcia-real-madrid-news-2023-rumors-transfer",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/hnp0ZAo99i4lmo_AOk7MrWOn1Vk=/0x0:2667x1396/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24400992/1461051178.jpg",
      publishedAt: "2023-02-01T11:01:29Z",
      content:
        "© 2023 Vox Media, LLC. All Rights Reserved\r\n* 21+ (19+ CA-ONT) (18+ NH/WY). AZ, CO, CT, IL, IN, IA, KS, LA, (select parishes), MD, MI, NH, NJ, NY, OH, OR, PA, TN, VA, WV, WY, CA-ONT only.Eligibility … [+128 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "Sri Lanka leave out injured Hasini Perera for T20 WC | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "Sathya Sandeepani, whose only game for the national side came in February 2020, has replaced Hasini Perera",
      url: "https://www.cricbuzz.com/cricket-news/125362/sri-lanka-leave-out-injured-hasini-perera-for-t20-world-cup-cricbuzzcom",
      urlToImage:
        "//m.cricbuzz.com/a/img/v1/600x400/i1/c254051/sri-lanka-will-be-without-hasini-perera-during-the-t20-world-cup.jpg",
      publishedAt: "2023-02-01T10:27:56Z",
      content:
        "Sri Lanka have left out experienced campaigner Hasini Perera from their 15-member squad for the upcoming T20 WC after she suffered an injury. Perera, who was named in the original squad, was forced o… [+1348 chars]",
    },
    {
      source: {
        id: null,
        name: "Barca Blaugranes",
      },
      author: "Renato Gonçalves",
      title:
        "FC Barcelona News: 1 February 2023; All set for Real Betis clash, Barça sell Héctor Bellerín on Deadline Day - Barca Blaugranes",
      description: "A round-up of the latest Barcelona news and rumors",
      url: "https://www.barcablaugranes.com/2023/2/1/23580558/fc-barcelona-news-1-february-2023-all-set-real-betis-clash-barca-sell-hector-bellerin-deadline-day",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/MBpKQA08qw1-iZw24rmITftKIA0=/0x0:4500x2356/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24400407/1459600909.jpg",
      publishedAt: "2023-02-01T10:00:00Z",
      content:
        "PREVIEW: Real Betis v FC Barcelona - FC BarcelonaAfter a 1-0 win at Girona on Saturday that coupled with Real Madrid's 0-0 draw at home to Real Sociedad means that they are now five points clear at t… [+1488 chars]",
    },
    {
      source: {
        id: null,
        name: "Cricbuzz",
      },
      author: null,
      title:
        "'There were times I wanted to give up' - Shaheen on his rough rehab | Cricbuzz.com - Cricbuzz - Cricbuzz",
      description:
        "Pakistan's prodigious fast bowler, who suffered a knee injury, will return to competitive action at the Pakistan Super League",
      url: "https://www.cricbuzz.com/cricket-news/125361/there-were-times-i-wanted-to-give-up-shaheen-on-his-rough-rehab",
      urlToImage:
        "http://www.cricbuzz.com/a/img/v1/600x400/i1/c254050/shaheen-afridi-had-to-miss-a-h.jpg",
      publishedAt: "2023-02-01T09:34:18Z",
      content:
        "Shaheen Afridi had to miss a host of international assignments due to his injury © Getty\r\nShaheen Afridi has been on more than one comeback trail in the last six months. And they've all been down to … [+2834 chars]",
    },
    {
      source: {
        id: null,
        name: "Football.London",
      },
      author: "Tom Coley",
      title:
        "The free agents Arsenal can still sign after deadline day to boost Premier League title hope - Football.London",
      description:
        "Arsenal transfer news: The Gunners may have done all their spending but they can still sign players for the rest of the season.",
      url: "https://www.football.london/arsenal-fc/transfer-news/arsenal-free-agent-title-hope-26125846",
      urlToImage:
        "https://i2-prod.football.london/incoming/article26126101.ece/ALTERNATES/s1200/0_cedric.jpg",
      publishedAt: "2023-02-01T09:01:53Z",
      content:
        "The conclusion of the January transfer window hardly ends the talk of incomings and outgoings. It is almost the start of the next phase of conversation. \r\nThis is when the talking has to stop and the… [+3090 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "ESPNcricinfo staff",
      title:
        "Hanuma Vihari bats left-handed, holds off Avesh Khan & Co despite fractured forearm - ESPNcricinfo",
      description:
        "After returning to bat, Vihari even hit two boundaries, including one off Avesh Khan",
      url: "https://www.espncricinfo.com/story/hanuma-vihari-bats-left-handed-against-mp-despite-fractured-forearm-in-ranji-trophy-1356820",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/341900/341969.6.jpg",
      publishedAt: "2023-02-01T09:00:00Z",
      content:
        "NewsAfter returning to bat, Vihari even hit two boundaries, including one off Avesh Khan",
    },
    {
      source: {
        id: null,
        name: "Hindustan Times",
      },
      author: "HT Sports Desk",
      title:
        "'Rishabh Pant drove me nuts. I stopped giving him suggestions and inputs' - Hindustan Times",
      description:
        "A former India coach recalled his initial days with Rishabh Pant, revealing how the wicketkeeper's stubbornness would make him 'angry and frustrated'. | Cricket",
      url: "https://www.hindustantimes.com/cricket/rishabh-pant-drove-me-nuts-i-stopped-giving-him-suggestions-and-inputs-ex-india-coach-r-sridhar-makes-staggering-claim-101675241501990.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2023/02/01/1600x900/pant-bcci-new_1675241630402_1675241640515_1675241640515.jpg",
      publishedAt: "2023-02-01T08:56:56Z",
      content:
        "Rishabh Pant may today be an inseparable part of the Indian Test team but there was a time when the youngster was still raw and needed to work hard to cement his place in the Playing XI. Pant was alw… [+2878 chars]",
    },
    {
      source: {
        id: "espn-cric-info",
        name: "ESPN Cric Info",
      },
      author: "ESPNcricinfo staff",
      title:
        "Nepal cricket board lifts suspension on Sandeep Lamichhane - ESPNcricinfo",
      description:
        "The update means that Lamichhane will be able to play the CWC League 2 tri-series matches against Namibia and Scotland this month",
      url: "https://www.espncricinfo.com/story/cricket-association-of-nepal-lifts-suspension-on-sandeep-lamichhane-1356793",
      urlToImage:
        "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/352500/352507.6.jpg",
      publishedAt: "2023-02-01T08:54:33Z",
      content:
        "NewsThe update means that Lamichhane will be able to play the CWC League 2 tri-series matches against Namibia and Scotland this month",
    },
    {
      source: {
        id: null,
        name: "Rediff.com",
      },
      author: "ANI",
      title: "Why Sania Mirza felt 'it is the time to stop' - Rediff.com",
      description:
        "Sania Mirza said she has no regrets leaving the sport as she is 'not the one to compete when I know I can no longer do it'.",
      url: "https://www.rediff.com/sports/report/why-sania-mirza-felt-it-is-the-time-to-stop/20230201.htm",
      urlToImage: "https://im.rediff.com/sports/2023/feb/01sania1.jpg",
      publishedAt: "2023-02-01T08:30:15Z",
      content:
        "IMAGE: Sania Mirza is India's most accomplished woman tennis player, having won six Grand Slam title, including three mixed doubles trophies. Photograph: Graham Denholm/Getty Images\r\nSania Mirza capp… [+2159 chars]",
    },
    {
      source: {
        id: null,
        name: "International Cricket Council",
      },
      author: "ICC",
      title:
        "Rankings boost for SKY as India star registers career-high rating - ICC Cricket",
      description:
        "The accolades continue to roll in for Suryakumar Yadav as the India dynamo and world's best T20I batter reached a new career-high rating on the updated MRF Tyres ICC Men's T20I Batting Rankings.",
      url: "https://www.icc-cricket.com/news/3043400",
      urlToImage:
        "https://resources.pulse.icc-cricket.com/ICC/photo/2023/02/01/b0b7e369-05f0-4765-ae77-434a68d6c97a/Sky-career-high.jpg",
      publishedAt: "2023-02-01T08:09:59Z",
      content:
        "The accolades continue to roll in for Suryakumar Yadav as the India dynamo and world's best T20I batter reached a new career-high rating on the updated MRF Tyres ICC Men's T20I Batting Rankings.Surya… [+3122 chars]",
    },
  ];

  constructor() {
    super();
    // Setting State in class based components
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div>
        <div className="container my-4">
          <h2>NewsSpy - Spy of the World</h2>
          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-3" key={element.url}>
                  {/* A unique key needs to be provided in such cases. */}
                  <NewsItem
                    title={element.title.length > 40 ? element.title.slice(0, 40) + "...":  element.title}
                    description={element.description.length > 97 ? element.description.slice(0, 97) + "...":  element.description}
                    img={element.urlToImage === null ? require("../Images/NoPreview.jpg") : element.urlToImage}
                    url={element.url}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
