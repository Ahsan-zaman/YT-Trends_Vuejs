<template>
    <div class="flex">
        <div v-for="video in videos" :key="video.id">
            <each-vid :vid="video" class="vid elevation-5"/>
        </div>
    </div>
</template>

<script>
//   import axios from 'axios'
    import EachVid from './EachVid.vue'
  export default {
    components: {
      EachVid
    },
    data() {
      return{
        videos: [
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/oShdryFUuXc8r5z8XmO5VgO0pSY\"",
            "id": "HAasAEbIVAw",
            "snippet": {
                "publishedAt": "2019-01-22T20:25:33.000Z",
                "channelId": "UCucot-Zp428OwkyRm2I7v2Q",
                "title": "Baking My Palette into a Cake",
                "description": "HI SISTERS! In today's video, I decided to live my childhood fantasy by baking a real-life FULLY EDIBLE CAKE version of the James Charles x Morphe palette!!! Happy Birthday Jack! Enjoy and don't forget get to thumbs up and SUBSCRIBE!\n\nThanks to my friends Drew and Gabriel for helping me out:\n\nFollow Drew on Youtube: https://youtube.com/lonefoxhome\nFollow Drew on Instagram: https://www.instagram.com/imdrewscott/\nFollow Gabriel on Instagram: https://www.instagram.com/gabrielzamora/\nFollow Gabriel on YouTube: https://www.youtube.com/channel/UCSWENbKZYBT6FkPlQvWbrtA?pbjreload=10\n\n🎥 PREVIOUS VIDEO » https://www.youtube.com/watch?v=yDKWmNpw7gE\n👕 SISTER'S APPAREL » http://sisters-apparel.com\n🛎 Subscribe to my channel to join the sisterhood & hit the notification bell so you never miss an upload! » http://bit.ly/JamesCharles for new videos!\n\n__\n\n❤️ LET'S BE BFFS\nINSTAGRAM » http://instagram.com/jamescharles\nTWITTER » http://twitter.com/jamescharles\nSNAPCHAT » jamescharless\n__\n\n💸 COUPON CODES 💸\n\nMORPHE BRUSHES » http://morphebrushes.com\nUse code \"JAMES\" for 10% off all products online AND in store!\n\nUBER » Use code \"SISTERJAMES\" for $5 off your first 3 rides!\n\nLILLY LASHES » https://lillylashes.com/\nUse code \"JAMES\" for 15% off all lashes\n\nLAURAS BOUTIQUE » http://lauras-boutique.com\nUse code \"JAMES\" for 10% off all items\n\nSKINDINAVIA » http://skindinavia.com\nUse code \"JAMES\" for 25% off all products \n\n__\n\n♡ MY AMAZING TEAM\n\nEDITOR: Louis & Anthony Gargiula\nhttp://instagram.com/louisgargiula\nhttp://instagram.com/anthonygargiula\n\nCONTENT COORDINATOR: Eros Gomez\nhttp://instagram.com/erosmua\n\nGRAPHICS: Michael Rusakov\nhttp://instagram.com/michael.ny",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/HAasAEbIVAw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/HAasAEbIVAw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/HAasAEbIVAw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/HAasAEbIVAw/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/HAasAEbIVAw/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "James Charles",
                "tags": [
                    "james",
                    "james charles",
                    "makeup artist",
                    "mua",
                    "covergirl",
                    "coverboy",
                    "cute",
                    "jeffree star",
                    "manny mua",
                    "easy makeup",
                    "how-to",
                    "reviews",
                    "tutorials",
                    "funny videos",
                    "beauty tips",
                    "hacks",
                    "beauty",
                    "baking",
                    "cake",
                    "how to cake it",
                    "cake boss",
                    "next great baker",
                    "gabriel zamora",
                    "stressed",
                    "burnt out",
                    "challenge",
                    "cooking",
                    "rosanna pansino",
                    "edible",
                    "james charles x morphe palette",
                    "james charles palette"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Baking My Palette into a Cake",
                    "description": "HI SISTERS! In today's video, I decided to live my childhood fantasy by baking a real-life FULLY EDIBLE CAKE version of the James Charles x Morphe palette!!! Happy Birthday Jack! Enjoy and don't forget get to thumbs up and SUBSCRIBE!\n\nThanks to my friends Drew and Gabriel for helping me out:\n\nFollow Drew on Youtube: https://youtube.com/lonefoxhome\nFollow Drew on Instagram: https://www.instagram.com/imdrewscott/\nFollow Gabriel on Instagram: https://www.instagram.com/gabrielzamora/\nFollow Gabriel on YouTube: https://www.youtube.com/channel/UCSWENbKZYBT6FkPlQvWbrtA?pbjreload=10\n\n🎥 PREVIOUS VIDEO » https://www.youtube.com/watch?v=yDKWmNpw7gE\n👕 SISTER'S APPAREL » http://sisters-apparel.com\n🛎 Subscribe to my channel to join the sisterhood & hit the notification bell so you never miss an upload! » http://bit.ly/JamesCharles for new videos!\n\n__\n\n❤️ LET'S BE BFFS\nINSTAGRAM » http://instagram.com/jamescharles\nTWITTER » http://twitter.com/jamescharles\nSNAPCHAT » jamescharless\n__\n\n💸 COUPON CODES 💸\n\nMORPHE BRUSHES » http://morphebrushes.com\nUse code \"JAMES\" for 10% off all products online AND in store!\n\nUBER » Use code \"SISTERJAMES\" for $5 off your first 3 rides!\n\nLILLY LASHES » https://lillylashes.com/\nUse code \"JAMES\" for 15% off all lashes\n\nLAURAS BOUTIQUE » http://lauras-boutique.com\nUse code \"JAMES\" for 10% off all items\n\nSKINDINAVIA » http://skindinavia.com\nUse code \"JAMES\" for 25% off all products \n\n__\n\n♡ MY AMAZING TEAM\n\nEDITOR: Louis & Anthony Gargiula\nhttp://instagram.com/louisgargiula\nhttp://instagram.com/anthonygargiula\n\nCONTENT COORDINATOR: Eros Gomez\nhttp://instagram.com/erosmua\n\nGRAPHICS: Michael Rusakov\nhttp://instagram.com/michael.ny"
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT26M52S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "3967692",
                "likeCount": "275531",
                "dislikeCount": "3998",
                "favoriteCount": "0",
                "commentCount": "69836"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/yduYoUbinscJNzdpwhQRlsbW7rM\"",
            "id": "J3xLG-whfFk",
            "snippet": {
                "publishedAt": "2019-01-22T17:00:05.000Z",
                "channelId": "UCbpMy0Fg74eXXkvxJrtEn3w",
                "title": "Pastry Chef Attempts to Make Gourmet Pringles | Gourmet Makes | Bon Appétit",
                "description": "Pringles. They're the miraculously not greasy potato chips that come in a tube. They're also the original duck face. Join Claire Saffitz as she attempts to make a gourmet version of Pringles! And lest we forget: once you pop the fun don't stop. \r\nCheck out Claire's Instagram: https://www.instagram.com/csaffitz/\r\n\n\nStill haven’t subscribed to Bon Appetit on YouTube? ►► http://bit.ly/1TLeyPn\r\n\r\nABOUT BON APPÉTIT\r\nCook with confidence using Bon Appetit’s kitchen tips, recipes, videos, and restaurant guides. Stay current on the latest food trends, dining destinations, and hosting ideas. \n\nPastry Chef Attempts to Make Gourmet Pringles | Gourmet Makes | Bon Appétit",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/J3xLG-whfFk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/J3xLG-whfFk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/J3xLG-whfFk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/J3xLG-whfFk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/J3xLG-whfFk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "Bon Appétit",
                "tags": [
                    "claire saffitz",
                    "gourmet",
                    "gourmet recipe",
                    "pastry chef",
                    "test kitchen",
                    "pringles",
                    "how to make pringles",
                    "claire makes",
                    "claire bon appetit",
                    "claire",
                    "gourmet makes",
                    "claire makes pringles",
                    "claire gourmet makes",
                    "gourmet pringles",
                    "gourmet pringles recipe",
                    "pastry chef makes",
                    "diy pringles",
                    "bon appetit claire",
                    "pringles recipe",
                    "pringles gourmet",
                    "claire ba",
                    "gourmet snacks",
                    "gourmet snack food",
                    "how pringles are made",
                    "pringles can",
                    "make pringles",
                    "making pringles",
                    "pringle",
                    "food",
                    "bon appetit"
                ],
                "categoryId": "26",
                "liveBroadcastContent": "none",
                "localized": {
                    "title": "Pastry Chef Attempts to Make Gourmet Pringles | Gourmet Makes | Bon Appétit",
                    "description": "Pringles. They're the miraculously not greasy potato chips that come in a tube. They're also the original duck face. Join Claire Saffitz as she attempts to make a gourmet version of Pringles! And lest we forget: once you pop the fun don't stop. \r\nCheck out Claire's Instagram: https://www.instagram.com/csaffitz/\r\n\n\nStill haven’t subscribed to Bon Appetit on YouTube? ►► http://bit.ly/1TLeyPn\r\n\r\nABOUT BON APPÉTIT\r\nCook with confidence using Bon Appetit’s kitchen tips, recipes, videos, and restaurant guides. Stay current on the latest food trends, dining destinations, and hosting ideas. \n\nPastry Chef Attempts to Make Gourmet Pringles | Gourmet Makes | Bon Appétit"
                },
                "defaultAudioLanguage": "en-US"
            },
            "contentDetails": {
                "duration": "PT21M5S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1797711",
                "likeCount": "77648",
                "dislikeCount": "1593",
                "favoriteCount": "0",
                "commentCount": "8280"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/sd1Bqw2qW7kZV_VyBoSXivXv620\"",
            "id": "1KiACA2ybTs",
            "snippet": {
                "publishedAt": "2019-01-22T17:02:06.000Z",
                "channelId": "UCLRmIdRJgLfmdpJufmBhBuA",
                "title": "Cold As Balls All-Stars | Ronda Rousey Takes No BS | Laugh Out Loud Network",
                "description": "Kevin Hart and Ronda Rousey kick off their shoes and jump in the tub to talk Olympic dreams, intimidating your significant other, and the meaning of FOMO. \nPowered by Old Spice - https://www.youtube.com/user/OldSpice \nAvailable at Walmart\n\nSUBSCRIBE▶︎http://bit.ly/SubscribeLOL\n\nFOLLOW THE FUNNY:\nFacebook▶︎http://bit.ly/LOLNetwork-FB\nTwitter▶︎http://bit.ly/LOLNetwork-TW\nInstagram▶︎http://bit.ly/LOLNetwork-IG\nYouTube▶︎http://bit.ly/LOLNetwork-YT\nSnapchat: LOLNetwork\nOfficial Website▶︎http://www.laughoutloud.com\n\nLOL Network is proud to source music for our online content from: \nSignature Tracks, Killer Tracks and Audio Network\n\nKevin Hart’s Laugh Out Loud Network YouTube channel is a specially-curated global platform for the NOW generation of comedians and original comedic content. It’s the ultimate destination for fans of funny. Subscribe for exclusive behind the scenes, live commentary by Kevin Hart, pranks, skits, and everything fun. Laugh Out Loud Network is a joint venture brainchild of Kevin Hart and Lionsgate.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/1KiACA2ybTs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/1KiACA2ybTs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/1KiACA2ybTs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/1KiACA2ybTs/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/1KiACA2ybTs/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "LOL Network",
                "tags": [
                    "kevin hart",
                    "hartbeat productions",
                    "funny",
                    "comedy",
                    "comedian",
                    "plastic cup boyz",
                    "actor",
                    "stand up",
                    "lol",
                    "laugh out loud",
                    "LOL Network",
                    "laugh out loud network",
                    "african american",
                    "WWE",
                    "Raw",
                    "Champion",
                    "UFC",
                    "ronda rousey",
                    "amanda nunes",
                    "sasha banks",
                    "title",
                    "royal rumble"
                ],
                "categoryId": "23",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Cold As Balls All-Stars | Ronda Rousey Takes No BS | Laugh Out Loud Network",
                    "description": "Kevin Hart and Ronda Rousey kick off their shoes and jump in the tub to talk Olympic dreams, intimidating your significant other, and the meaning of FOMO. \nPowered by Old Spice - https://www.youtube.com/user/OldSpice \nAvailable at Walmart\n\nSUBSCRIBE▶︎http://bit.ly/SubscribeLOL\n\nFOLLOW THE FUNNY:\nFacebook▶︎http://bit.ly/LOLNetwork-FB\nTwitter▶︎http://bit.ly/LOLNetwork-TW\nInstagram▶︎http://bit.ly/LOLNetwork-IG\nYouTube▶︎http://bit.ly/LOLNetwork-YT\nSnapchat: LOLNetwork\nOfficial Website▶︎http://www.laughoutloud.com\n\nLOL Network is proud to source music for our online content from: \nSignature Tracks, Killer Tracks and Audio Network\n\nKevin Hart’s Laugh Out Loud Network YouTube channel is a specially-curated global platform for the NOW generation of comedians and original comedic content. It’s the ultimate destination for fans of funny. Subscribe for exclusive behind the scenes, live commentary by Kevin Hart, pranks, skits, and everything fun. Laugh Out Loud Network is a joint venture brainchild of Kevin Hart and Lionsgate."
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT13M18S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "regionRestriction": {
                    "blocked": [
                        "CA"
                    ]
                },
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1661880",
                "likeCount": "50425",
                "dislikeCount": "1414",
                "favoriteCount": "0",
                "commentCount": "5766"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/epT7FzkHTYa-7Op0K73ADxUiofA\"",
            "id": "Sf_2zrX_Mmg",
            "snippet": {
                "publishedAt": "2019-01-22T17:15:24.000Z",
                "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
                "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "ESPN",
                "tags": [
                    "klay thompson",
                    "stephen a.",
                    "first take",
                    "klay thompson 10 threes",
                    "klay thompson lakers",
                    "lebron lakers",
                    "lebron james",
                    "los angeles lakers",
                    "steph curry",
                    "klay thompson free agency",
                    "klay thompson lebron james",
                    "nba",
                    "stephen a. smith",
                    "nba on espn",
                    "golden state warriors",
                    "los angeles lakers free agency",
                    "nba free agency",
                    "nba news",
                    "nba on espn channel",
                    "lakers free agency",
                    "kevin durant free agency",
                    "kawhi leonard",
                    "kawhi leonard free agency",
                    "lonzo ball",
                    "lakers defense"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                    "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com"
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT6M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "415165",
                "likeCount": "4372",
                "dislikeCount": "884",
                "favoriteCount": "0",
                "commentCount": "2435"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/epT7FzkHTYa-7Op0K73ADxUiofA\"",
            "id": "Sf_8zrX_Mmg",
            "snippet": {
                "publishedAt": "2019-01-22T17:15:24.000Z",
                "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
                "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "ESPN",
                "tags": [
                    "klay thompson",
                    "stephen a.",
                    "first take",
                    "klay thompson 10 threes",
                    "klay thompson lakers",
                    "lebron lakers",
                    "lebron james",
                    "los angeles lakers",
                    "steph curry",
                    "klay thompson free agency",
                    "klay thompson lebron james",
                    "nba",
                    "stephen a. smith",
                    "nba on espn",
                    "golden state warriors",
                    "los angeles lakers free agency",
                    "nba free agency",
                    "nba news",
                    "nba on espn channel",
                    "lakers free agency",
                    "kevin durant free agency",
                    "kawhi leonard",
                    "kawhi leonard free agency",
                    "lonzo ball",
                    "lakers defense"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                    "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com"
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT6M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "415165",
                "likeCount": "4372",
                "dislikeCount": "884",
                "favoriteCount": "0",
                "commentCount": "2435"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/epT7FzkHTYa-7Op0K73ADxUiofA\"",
            "id": "Sf_OzrX_Mmg",
            "snippet": {
                "publishedAt": "2019-01-22T17:15:24.000Z",
                "channelId": "UCiWLfSweyRNmLpgEHekhoAg",
                "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/Sf_OzrX_Mmg/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "ESPN",
                "tags": [
                    "klay thompson",
                    "stephen a.",
                    "first take",
                    "klay thompson 10 threes",
                    "klay thompson lakers",
                    "lebron lakers",
                    "lebron james",
                    "los angeles lakers",
                    "steph curry",
                    "klay thompson free agency",
                    "klay thompson lebron james",
                    "nba",
                    "stephen a. smith",
                    "nba on espn",
                    "golden state warriors",
                    "los angeles lakers free agency",
                    "nba free agency",
                    "nba news",
                    "nba on espn channel",
                    "lakers free agency",
                    "kevin durant free agency",
                    "kawhi leonard",
                    "kawhi leonard free agency",
                    "lonzo ball",
                    "lakers defense"
                ],
                "categoryId": "17",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Klay Thompson is key to LeBron’s quest for a Lakers championship – Stephen A. | First Take",
                    "description": "Stephen A. Smith marvels at Klay Thompson’s shooting prowess and breaks down how Klay could potentially elevate Los Angeles’ championship odds alongside LeBron James if he becomes a Laker in free agency. \n\n✔ Subscribe to ESPN on YouTube: http://es.pn/SUBSCRIBEtoYOUTUBE\n✔ Subscribe to ESPN FC on YouTube: http://bit.ly/SUBSCRIBEtoESPNFC\n✔ Subscribe to NBA on ESPN on YouTube: http://bit.ly/SUBSCRIBEtoNBAonESPN\n✔ Watch ESPN on YouTube TV: http://es.pn/YouTubeTV\n\nESPN on Social Media:\n► Follow on Twitter: http://www.twitter.com/espn\n► Like on Facebook: http://www.facebook.com/espn\n► Follow on Instagram: http://www.instagram.com/espn\n\nVisit ESPN on YouTube to get up-to-the-minute sports news coverage, scores, highlights and commentary for NFL, NHL, MLB, NBA, College Football, NCAA Basketball, soccer and more. \n\nMore on ESPN.com: http://www.espn.com"
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT6M56S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "false",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "415165",
                "likeCount": "4372",
                "dislikeCount": "884",
                "favoriteCount": "0",
                "commentCount": "2435"
            }
        },
        {
            "kind": "youtube#video",
            "etag": "\"XpPGQXPnxQJhLgs6enD_n8JR4Qk/jx6NWaViWyQR7SnEG3xMSowVFNE\"",
            "id": "2f4gMQd_9Hs",
            "snippet": {
                "publishedAt": "2019-01-22T08:35:00.000Z",
                "channelId": "UCMtFAi84ehTSYSE9XoHefig",
                "title": "Rep. Ocasio-Cortez And Stephen Eat Ben & Jerry's",
                "description": "Rep. Alexandria Ocasio-Cortez tells Stephen about her first few weeks in Congress over a couple pints of ice cream.\n\nSubscribe To \"The Late Show\" Channel HERE: http://bit.ly/ColbertYouTube\nFor more content from \"The Late Show with Stephen Colbert\", click HERE: http://bit.ly/1AKISnR\nWatch full episodes of \"The Late Show\" HERE: http://bit.ly/1Puei40\nLike \"The Late Show\" on Facebook HERE: http://on.fb.me/1df139Y\nFollow \"The Late Show\" on Twitter HERE: http://bit.ly/1dMzZzG\nFollow \"The Late Show\" on Google+ HERE: http://bit.ly/1JlGgzw\nFollow \"The Late Show\" on Instagram HERE: http://bit.ly/29wfREj\nFollow \"The Late Show\" on Tumblr HERE: http://bit.ly/29DVvtR\n\nWatch The Late Show with Stephen Colbert weeknights at 11:35 PM ET/10:35 PM CT. Only on CBS.\n\nGet the CBS app for iPhone & iPad! Click HERE: http://bit.ly/12rLxge\n\nGet new episodes of shows you love across devices the next day, stream live TV, and watch full seasons of CBS fan favorites anytime, anywhere with CBS All Access. Try it free! http://bit.ly/1OQA29B\n\n---\nThe Late Show with Stephen Colbert is the premier late night talk show on CBS, airing at 11:35pm EST, streaming online via CBS All Access, and delivered to the International Space Station on a USB drive taped to a weather balloon. Every night, viewers can expect: Comedy, humor, funny moments, witty interviews, celebrities, famous people, movie stars, bits, humorous celebrities doing bits, funny celebs, big group photos of every star from Hollywood, even the reclusive ones, plus also jokes.",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/2f4gMQd_9Hs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/2f4gMQd_9Hs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/2f4gMQd_9Hs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/2f4gMQd_9Hs/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/2f4gMQd_9Hs/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "The Late Show with Stephen Colbert",
                "tags": [
                    "The Late Show",
                    "Late Show",
                    "Stephen Colbert",
                    "Steven Colbert",
                    "Colbert",
                    "celebrity",
                    "celeb",
                    "celebrities",
                    "late night",
                    "talk show",
                    "comedian",
                    "comedy",
                    "CBS",
                    "joke",
                    "jokes",
                    "funny",
                    "funny video",
                    "funny videos",
                    "humor",
                    "hollywood",
                    "famous"
                ],
                "categoryId": "24",
                "liveBroadcastContent": "none",
                "defaultLanguage": "en",
                "localized": {
                    "title": "Rep. Ocasio-Cortez And Stephen Eat Ben & Jerry's",
                    "description": "Rep. Alexandria Ocasio-Cortez tells Stephen about her first few weeks in Congress over a couple pints of ice cream.\n\nSubscribe To \"The Late Show\" Channel HERE: http://bit.ly/ColbertYouTube\nFor more content from \"The Late Show with Stephen Colbert\", click HERE: http://bit.ly/1AKISnR\nWatch full episodes of \"The Late Show\" HERE: http://bit.ly/1Puei40\nLike \"The Late Show\" on Facebook HERE: http://on.fb.me/1df139Y\nFollow \"The Late Show\" on Twitter HERE: http://bit.ly/1dMzZzG\nFollow \"The Late Show\" on Google+ HERE: http://bit.ly/1JlGgzw\nFollow \"The Late Show\" on Instagram HERE: http://bit.ly/29wfREj\nFollow \"The Late Show\" on Tumblr HERE: http://bit.ly/29DVvtR\n\nWatch The Late Show with Stephen Colbert weeknights at 11:35 PM ET/10:35 PM CT. Only on CBS.\n\nGet the CBS app for iPhone & iPad! Click HERE: http://bit.ly/12rLxge\n\nGet new episodes of shows you love across devices the next day, stream live TV, and watch full seasons of CBS fan favorites anytime, anywhere with CBS All Access. Try it free! http://bit.ly/1OQA29B\n\n---\nThe Late Show with Stephen Colbert is the premier late night talk show on CBS, airing at 11:35pm EST, streaming online via CBS All Access, and delivered to the International Space Station on a USB drive taped to a weather balloon. Every night, viewers can expect: Comedy, humor, funny moments, witty interviews, celebrities, famous people, movie stars, bits, humorous celebrities doing bits, funny celebs, big group photos of every star from Hollywood, even the reclusive ones, plus also jokes."
                },
                "defaultAudioLanguage": "en"
            },
            "contentDetails": {
                "duration": "PT8M11S",
                "dimension": "2d",
                "definition": "hd",
                "caption": "true",
                "licensedContent": true,
                "projection": "rectangular"
            },
            "statistics": {
                "viewCount": "1198327",
                "likeCount": "21732",
                "dislikeCount": "8663",
                "favoriteCount": "0",
                "commentCount": "10140"
            }
        }
        ],
        videos1:[]
      }
    },
    computed:{
        
    }
    // async mounted(){
    //     await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
    //         params:{
    //         part: 'snippet, contentDetails, statistics',
    //         chart: 'mostPopular',
    //         videoCategoryId: '10',
    //         maxResults: '20',
    //         regionCode: 'US',
    //         key: 'AIzaSyB_wn0eW1-iohO_pwRPl9gNUFqZ8-jz9_Q'
    //     }
    //     })
    //     .then((res) =>{
    //         this.videos1 = res.data.items
    //     })
    //     .catch(err=>{
    //         this.assignE(err)
    //     })
    // }
  }
</script>

<style scoped>

.flex{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: center;
}

.vid {
  margin: 25px;
}
</style>
