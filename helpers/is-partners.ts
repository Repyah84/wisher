const PARTNERS = [
  "nucific.com",
  "us.inikaorganic.com",
  "modifyhealth.com",
  "dermatica.com",
  "patricianashdesigns.com",
  "vitality4life.com",
  "craghoppers.com/us",
  "photobookamerica.com",
  "doughnutofficial.com/usa",
  "eonon.com",
  "spreadshop.com",
  "compareyourtravelinsurance.ca",
  "us.illamasqua.com",
  "christopherobin.com",
  "soundswell.com",
  "beautypie.com/us",
  "thefutonshop.com",
  "isdin.com/us",
  "clickinks.com",
  "nutreecosmetics.com",
  "restube.us",
  "oedro.com",
  "safihotel.com/en",
  "sunberhair.com",
  "jshotels.com/en",
  "nnhotels.com/en",
  "belivehotels.com",
  "h10hotels.com",
  "ivisa.com",
  "neonchamp.com",
  "socialmediacalendar.co",
  "grohe.us",
  "osmotics.com",
  "animeartacademy.com",
  "yazio.com/app/lp/feature/general.html",
  "dinnerly.com/how",
  "tiqets.com/en",
  "bogner.com/en-us",
  "bookoutlet.com",
  "krystal-hotels.com",
  "dimplescharms.com",
  "modestvintageplayer.com",
  "hsialife.com",
  "iallpowers.com",
  "petrolvibes.com",
  "gundrymd.com",
  "youngdays.com",
  "hawesandcurtis.com",
  "beflaxlinen.com",
  "quicklly.com",
  "trendgallery.art",
  "unihertz.com",
  "seralabshealth.com",
  "mdr.com",
  "biermannscloset.com",
  "tvcmall.com",
  "furrik.com",
  "americanstandard-us.com",
  "kiwi.com/us",
  "us.rodial.com",
  "muhdo.com",
  "photobookcanada.com",
  "shortpar4.com",
  "mrbigandtall.ca",
  "passfab.com",
  "temptation-experience.com",
  "kerahealth.com",
  "australialuxeco.com",
  "rzmask.com",
  "feelhour.com",
  "padelmarket.com/es",
  "gardenoflife.tw",
  "en.sportdirect.ca",
  "petfoodpros.com",
  "cavaletticollection.com",
  "encalife.com",
  "goldenroot.co",
  "en.nyxhotels.com",
  "verdanttea.com",
  "gigatechgaming.com",
  "oscardeen.com",
  "hotelsviva.com/en",
  "buymymagiccarpet.com",
  "averraglow.com",
  "dbud.io",
  "alayanaturals.com",
  "ledda.co",
  "theadventurechallenge.com",
  "canvaschamp.ca",
  "constancehotels.com/en",
  "revolutionbeauty.us",
  "canvaschamp.com",
  "endclothing.com/us",
  "anishakarkhanis.com",
  "citarella.com",
  "oasishoteles.com/en",
  "growgorgeous.com",
  "lebua.com",
  "radissonhotels.com/en-us",
  "us.fatface.com",
  "thewonderverselabs.com",
  "dresslily.com",
  "astutegraphics.com",
  "utrrr.com",
  "statescard.com",
  "golfbays.com",
  "reforestdesign.com",
  "wisecars.com",
  "aliexpress.com",
  "ribblecycles.co.uk",
  "pureandcimple.com",
  "driffle.com",
  "drestige.com",
  "f1authentics.com",
  "eyekeeper.com",
  "elifelimo.com",
  "getcheex.com",
  "rituals.com/en-us",
  "giftory.com",
  "colouredcontacts.com/en_US",
  "millenniumhotels.com",
  "vevor.ca",
  "erank.com",
  "hotelopia.com",
  "ultimatepetnutrition.com",
  "vibrahotels.com",
  "oasisspace.com",
  "prettypegs.com",
  "qatarairways.com/en-us/homepage.html",
  "us.allies.shop",
  "elcid.com",
  "comohotels.com",
  "casetify.com",
  "airport-reservations.com/awin",
  "latamairlines.com/us/en",
  "app.lingokids.com",
  "kimono-dragon.com",
  "thetwistergroup.com",
  "xandrolab.com",
  "solarosette.com",
  "khiry.com",
  "lyma.life",
  "kintsugihair.com",
  "niucoco.com",
  "bagsmart.com",
  "calyxflowers.com",
  "vinylflat.com",
  "peacecoffee.com",
  "hotelsbyday.com/en",
  "us.keepcup.com",
  "jonesbar.com",
  "us.lookfantastic.com",
  "hinokilab.com",
  "solbari.com",
  "attapoll.app/lead/lead",
  "weareknitters.com",
  "rollink.com",
  "buythermopro.com",
  "alohas.io",
  "livemax.com",
  "sunjoyshop.com",
  "secureteen.com",
  "jumpflex.com",
  "carpediemplanners.com",
  "adniasolutions.com",
  "ourbus.com",
  "hotoctopuss.com",
  "us.publicdesire.com",
  "prodirectsport.us",
  "bookoutlet.ca",
  "egoshoes.com",
  "dji.com",
  "inspireuplift.com",
  "alibaba.com",
  "qatarairways.com/en-ca/homepage.html",
  "promki24.com",
  "georgerichards.ca",
  "iamshewarrior.com",
  "sleeponhealth.com",
  "videoscribe.co/en",
  "shoplittlepaperboatco.com",
  "printerpix.com",
  "cancunbayresort.com/en",
  "us.hairburst.com",
  "twistedlily.com",
  "christopherobin.ca",
  "checkmybodyhealth.com/us",
  "f3energy.com",
  "greyhound.com",
  "mexicograndhotels.com",
  "vallarta-adventures.com",
  "thefiveshotels.com",
  "azulixtapa.com/en",
  "ostar.com.mx/en",
  "chatrium.com",
  "vevor.com",
  "unifyhealthlabs.com",
  "holistichairtribe.com",
  "dmoose.com",
  "aliexpress.com",
  "washingtonlocalbox.com",
  "powergymstore.com",
  "us.boohoo.com",
  "lefimar.com",
  "extranomical.com",
  "cocunat.com/en-us",
  "flixbus.com",
  "newchapter.com",
  "porsche-design.com/us/en",
  "drcuddles.com",
  "maxpeedingrods.com",
  "perriconemd.com",
  "mypowerlife.com",
  "asbydf.com",
  "naphome.com",
  "marleyspoon.com",
  "thetopvillas.com/en_us",
  "ribblecycles.co.uk",
  "hit.co.uk",
  "broadwaydirect.com",
  "lostpattern.com",
  "mphotels.com",
  "barbernation.com",
  "haymancoffee.com",
  "gigatechonline.com",
  "yorktest.com/us",
  "us.thrudark.com",
  "usamedicalshop.com",
  "cancun-adventure.com",
  "thegreatcourses.com",
  "lecol.cc",
  "lcrhealth.com",
  "thegrumpyoctopus.com",
  "modadiandrea.com/en",
  "cjs-cdkeys.com",
  "you-buy.ca",
  "asus.com/us/store",
  "kikipure.com",
  "home.sunrider.com",
  "fopomonitor.com",
  "tarotcardsdarkforest.com",
  "daebak.co",
  "mylivlit.com",
  "zonlihome.com",
  "anuts.com",
  "funnyfuzzy.com",
  "getpottd.com",
  "getpottd.com/en-us",
  "otofonix.com",
  "hertzmexico.com/en/affilired-en",
  "natrusmile.com",
  "tenways.com",
  "calisupersoil.com",
  "villagroupresorts.com",
  "tesororesorts.com/en/home",
  "nh-hotels.com",
  "movichhotels.com/en",
  "tridenthotels.com",
  "dusit.com",
  "us.satisfyer.com/us",
  "3believe.com",
  "bathsofdistinction.com",
  "lucyinthesky.com",
  "vosbody.com",
  "laco-watches.com/en/index",
  "myprotein.com",
  "nordvpn.com/special/deal",
  "stylemyle.com",
  "ecosusi.com",
  "onlinecheckwriter.com",
  "chikoshoes.com",
  "thefitbodyfactory.com",
  "naturesskinandbody.com",
  "blackboxmeats.com",
  "testmyallergy.com",
  "grandbazaarist.com",
  "yfn.com",
  "ewinracing.com",
  "shop.samsung.com/ca",
  "plazapremiumlounge.com",
  "theayurvedaexperience.com",
  "tiptop.ca",
  "gamivo.com",
  "oberoihotels.com",
  "vivint.com/shop",
  "waterdropfilter.com",
  "kiwi.com/ca",
  "activatedyou.com",
  "alyaka.com/us",
  "ignae.com",
  "apricoat.com",
  "alaskanleathercompany.com",
  "lopesan.com/en",
  "apco.boutique",
  "store.carkeysexpress.com",
  "taferresorts.com",
  "allergytest.co",
  "goddiva.co.uk",
  "zupapa.us",
  "kagedmuscle.com",
  "angara.com/ca-en",
  "sweatybetty.com",
  "haygain.us",
  "oyorooms.com/us",
  "brusselsairlines.com/en-us",
  "anantara.com",
  "war-locker.com",
  "steeleborough.com",
  "roundhouseprovisions.com",
  "spatarella.eu",
  "limeandlou.com",
  "belleek.com",
  "woodmajestic.com",
  "aniise.com",
  "jadedldn.com",
  "melscience.com/US-en",
  "baileynelson.com",
  "nightlark.com",
  "cannanumb.com",
  "us.espaskincare.com",
  "us.currentbody.com",
  "hexclad.com",
  "fishersfinery.com",
  "coconu.com",
  "desire-experience.com",
  "onyx-hospitality.com",
  "corinthia.com",
  "copamarina.com",
  "melia.com/en/brands/luxury/paradisus",
  "quictents.com",
  "dermstore.com",
  "tamisense.com",
  "juliahair.com",
  "scienceandhumans.com",
  "videopeel.com",
  "hacknerhome.com",
  "prioritypass.com",
  "doomlings.com",
  "atlasvpn.com",
  "dragonhawkofficial.com",
  "comvita.com",
  "unice.com",
  "drhouse.com",
  "ovusense.com/us",
  "feelyounger.net",
  "factorydirectfilters.com",
  "ivacy.com",
  "en.beachscape.com.mx",
  "mannioil.com",
  "affiliatewindow.com",
  "go2africa.com",
  "EverSafe.com",
  "1stformations.co.uk",
  "365datascience.com",
  "3villas.com",
  "4cornerscannabis.com",
  "999inks.co.uk",
  "ashadrynoodle.com",
  "info.aarp.org",
  "abcya.com",
  "adoreadorn.com",
  "affordableblinds.com",
  "afifurnishings.com",
  "ibuypower.com",
  "tubespanner.com",
  "agogie.com",
  "aidot.com",
  "aiper.com",
  "airalo.com",
  "airslate.com",
  "grownbrilliance.com",
  "yohn.io",
  "aligracehair.com",
  "allbirds.com",
  "boldoversize.com",
  "aob.com",
  "shop.americantourister.com",
  "amirobeauty.com",
  "store.amymyersmd.com",
  "animoto.com",
  "aofithealth.com",
  "aosom.it",
  "aosom.com",
  "aosom.co.uk",
  "apolloayurveda.com",
  "dealmirror.com",
  "areteadaptogens.com",
  "arkudadigital.com",
  "arteza.com",
  "artpix3d.com",
  "arylic.com",
  "myweddingfavors.com",
  "augustberg.com",
  "ownyouraura.com",
  "autonationmobileservice.com",
  "baglionihotels.com",
  "balooliving.com",
  "banggood.com",
  "BanilaUSA.com",
  "bartesian.com",
  "oneforallsocial.com",
  "theinkeylist.com",
  "meetbeagle.com",
  "bearclawkitchen.com",
  "beautyforever.com",
  "shinola.com",
  "beerwulf.com",
  "bellelily.com",
  "bestvibe.com",
  "bettycora.com",
  "billo.app",
  "biovanta.com",
  "bitdefender.com",
  "blackriflecoffee.com",
  "blackstoneproducts.com",
  "blinkist.com",
  "bluecoolers.com",
  "bluebirdbotanicals.com",
  "bluettipower.com",
  "bombusbee.net",
  "sitechecker.pro",
  "botanicchoice.com",
  "boxdog.com",
  "brandcollective.com.au",
  "englishonline.britishcouncil.org",
  "brondell.com",
  "builtwithscience.com",
  "shop.bulletproof.com",
  "burga.com",
  "butchercrowd.com.au",
  "BoostYourScore.com",
  "orionmotortech.com",
  "caperobbin.com",
  "careerist.com",
  "care.com/en-ca",
  "case-mate.com",
  "casetify.com",
  "cdkeys.com",
  "cgear-sandfree.com",
  "checkmybodyhealth.com",
  "swifdoo.com",
  "chicos.com/store",
  "zolucky.com",
  "chums.com",
  "circleboom.com",
  "citizenshipper.com",
  "clean.email",
  "cleannutra.com",
  "cloudpaper.co",
  "clutter.com",
  "coalatree.com",
  "codemonkey.com",
  "coinrule.com",
  "coinsmart.com/getcrypto",
  "collov.com",
  "withconfetti.com",
  "Conns.com",
  "store.consdan.com",
  "faithheart-jewelry.com",
  "coop.farm",
  "coravin.com.au",
  "cosmolle.com",
  "bvibe.com",
  "countingup.com",
  "shopcouper.com",
  "cowinaudio.com",
  "cozyearth.com",
  "harfington.com",
  "crocofficial.com",
  "ctfeshop.com.hk",
  "cuddly.com",
  "dailyharvest.com",
  "dailyhighclub.com",
  "dansons.com",
  "dave.com",
  "decathlon.ca",
  "delilahhome.com",
  "tires-easy.com",
  "devereuxgolf.com",
  "digitalocean.com",
  "dhgate.com",
  "discountmugs.com",
  "dphue.com",
  "drunk-desires.com",
  "ducadelcosma.us",
  "dymocks.com.au",
  "dyucycle.com",
  "eaze.com",
  "ebags.com",
  "ebrands.com",
  "education.com",
  "electronicx.de",
  "elklook.com",
  "elpumps.com",
  "elsaspeak.com",
  "ember.com",
  "emmiol.com",
  "encounterstravel.com",
  "endoca.com",
  "enphase.com",
  "envato.com",
  "buybestgear.com",
  "equi.life",
  "shop.equipmentshare.com",
  "equityset.com",
  "erabeautyusa.com",
  "ettitude.com",
  "eurekaergonomic.com",
  "hide.me",
  "evermorepetfood.com",
  "ever-pretty.co.uk",
  "eyebobs.com",
  "fanatics.com",
  "bravenewlook.com",
  "anker.com",
  "fareportal.com",
  "farmerandchemist.com",
  "yosudabikes.com",
  "vocolinc.com",
  "finary.io/about",
  "firstbase.io",
  "fit2run.com",
  "getfittrack.com",
  "thefitville.com",
  "flaviar.com",
  "manlytshirt.com",
  "forloveandlemons.com",
  "foresite360.com",
  "fotp.com",
  "frankgreen.com.au",
  "nz.frankgreen.com",
  "uk.frankgreen.com",
  "us.frankgreen.com",
  "franklinsports.com",
  "thehalara.com",
  "funwhole.com",
  "fwd.com.hk",
  "gamivo.com",
  "mygardyn.com",
  "gelblaster.com",
  "onshorekare.com",
  "getabstract.com",
  "gigsky.com",
  "girlfriend.com",
  "glamnetic.com",
  "stylevana.com/en_AU",
  "globalhealing.com",
  "global-widget.com",
  "glorify-app.com",
  "glowforge.com",
  "glamermaid.com",
  "gognarly.com",
  "gogreenclean.org",
  "goalry.com",
  "golfballs.com",
  "goodlifeinc.com",
  "odenson.com",
  "gourmetgiftbaskets.com",
  "greenmangaming.com",
  "gnln.com",
  "groundfloor.com",
  "guitarcenter.com",
  "nekkocare.com",
  "hairstory.com",
  "halytus.com",
  "esimusa.com",
  "mikesbikes.com",
  "headout.com",
  "healistnaturals.com",
  "hwxcbd.com",
  "healthycell.com",
  "hellocake.com",
  "hellochef.com",
  "hellofresh.com.au",
  "greenchef.co.uk",
  "hellofresh.co.uk",
  "hellotech.com",
  "hero.co",
  "hardlyeverwornit.com",
  "hexact.io/affiliate",
  "wherelight.com",
  "shinehairwig.com",
  "homary.com",
  "homecourt.co",
  "unice.com",
  "lilysilk.com",
  "retro-stage.com",
  "rosewe.com",
  "honkforhelp.com",
  "hulalahome.com",
  "hush.ca",
  "azarlive.com",
  "krogerwireless.com",
  "iherb.com",
  "textbuilder.ai",
  "indielee.com",
  "internationalopenacademy.com",
  "invideo.io",
  "iobit.com",
  "irenehouse.com",
  "iscooterglobal.co.uk",
  "ivosight.com",
  "jabra.com.au",
  "jabra.jp",
  "jabra.sg",
  "jackery.com",
  "jalbum.net",
  "jaxxon.com",
  "joesnewbalanceoutlet.com",
  "joybos.com",
  "juaraskincare.com",
  "jumpstory.com",
  "jvnhair.com",
  "kang.fr",
  "kardiel.com",
  "kathykuohome.com",
  "kayser-roth.com",
  "ithairproducts.com",
  "keyskillset.com",
  "kidkraft.com",
  "kiierr.com",
  "mykitsch.com",
  "kkday.com",
  "joinklover.com",
  "kosas.com",
  "lac.sg",
  "laganoo.com",
  "laifentech.com",
  "livelarq.com",
  "lazarusnaturals.com",
  "leafydoc.com",
  "lenovo.com/in/en",
  "lenovo.com",
  "lenovo.com/tw/zh",
  "letsresin.com",
  "levainbakery.com",
  "eechic.com",
  "flowerchimp.com",
  "littlesleepies.com",
  "londontheatredirect.com",
  "longyi.com",
  "lordhair.com",
  "senadabikes.com",
  "lovo.ai",
  "lumarysmart.com",
  "shop.luvmehair.com",
  "clubmagichour.com",
  "maisonette.com",
  "shopmakari.com",
  "marketxls.com",
  "matboardandmore.com",
  "mccreascandies.com",
  "ethicacbd.com",
  "melscience.com",
  "melodynecklace.com",
  "messyweekend.co.uk",
  "meyerus.com",
  "shopmicas.com",
  "milkbooks.com",
  "misssixty.com",
  "mmopixel.com",
  "mojawa.com",
  "momcozy.com",
  "momentaryink.com",
  "hkmommed.myshopify.com",
  "moneygram.com",
  "moonjuice.com",
  "moshtix.com.au",
  "moshtix.co.nz",
  "usemotion.com",
  "motisbrands.com",
  "mtnops.com",
  "mukhayoga.com",
  "Mullybox.com",
  "cablecreation.com",
  "mushroomsupplies.com",
  "gb.mypetsensitivity.com",
  "myheritage.com",
  "mylio.com",
  "nakto.com",
  "ncsf.org/partners",
  "naturalcycles.com",
  "naturemade.com",
  "naturessunshine.com",
  "de.naturecan.com",
  "naturopathica.com",
  "neakasa.com",
  "neshealth.com/en",
  "netpeaksoftware.com",
  "newchic.com",
  "nexo.io",
  "nextmar.com",
  "nfhsnetwork.com",
  "ninawoof.com",
  "noahome.com",
  "nordvpn.com",
  "novica.com",
  "nuleafnaturals.com",
  "odinlake.com",
  "ofx.com",
  "drinkolipop.com",
  "oliverstravels.com",
  "oliversapparel.com",
  "olproshop.com",
  "olynvolt.com",
  "omio.com",
  "on1.com",
  "oncourtoffcourt.com",
  "oneplus.com",
  "lomi.com",
  "ora.organic",
  "jardina.com",
  "orangeonions.com",
  "orantneon.com",
  "cotosen.com",
  "orlandovacation.com",
  "titanchair.com",
  "otterbox.com.au",
  "ottopay.com",
  "fromourplace.com",
  "ouraring.com",
  "liveouter.com",
  "oxo.com",
  "parallels.com",
  "Parts-Express.com",
  "patpat.com?adlk_id=2044169",
  "paw.com",
  "performixdriven.com",
  "perkclothing.com",
  "petchemist.com.au",
  "picsart.com",
  "piquelife.com",
  "pishposhbaby.com",
  "pitviper.com",
  "planetstockphoto.com",
  "plumbing-deals.com",
  "podia.com",
  "popilush.com",
  "poplin.co",
  "poppybarley.com",
  "positivegrid.com",
  "postmymeds.co.uk",
  "powderaddicts.com",
  "presetpro.com",
  "prettyyoulondon.co.uk",
  "prettylitter.com",
  "printerinks.com",
  "printful.com",
  "propmoney.com",
  "proranktracker.com",
  "istyle.id",
  "publicgoods.com",
  "puffy.com",
  "puravidabracelets.com",
  "rag-bone.com",
  "rapsodo.com",
  "rawsugarliving.com",
  "readdle.com",
  "redkap.com",
  "redtop.com",
  "reibii.com",
  "reliancecomfort.com",
  "resetiv.com",
  "respecthealth.com.au",
  "restduvet.com",
  "myrevair.com",
  "revivesuperfoods.com",
  "ringconn.com",
  "us.roborock.com",
  "renpho.com",
  "gravityforms.com",
  "rootquencher.com",
  "rosettastone.com",
  "eatrotten.com",
  "rugs-direct.com",
  "rugsusa.com",
  "shop.samsonite.com",
  "saramonicusa.com",
  "scalahosting.com",
  "scrambly.io",
  "seagm.com",
  "cabana.life",
  "secretescapes.com",
  "helloseen.com",
  "selenichast.com",
  "myserenitykids.com",
  "shapellx.com",
  "sharkninja.ca",
  "sharperedges.com",
  "store.yeelight.com",
  "shibumishade.com",
  "shimodadesigns.com",
  "simbla.com",
  "simple-life-app.com",
  "simplyhealthchecks.com",
  "iguanasport.com",
  "sitkaseafoodmarket.com",
  "skillr.com",
  "skillshare.com",
  "sleepandbeyond.com",
  "smartassandsass.com",
  "smartproxy.com",
  "evertoneskin.com",
  "speckproducts.com",
  "sportsbrandsinc.com",
  "springfreetrampoline.com",
  "sentrypc.com",
  "starcks.io",
  "stardock.com",
  "stio.com",
  "storyworth.com",
  "strutmasters.com",
  "sunwarrior.com",
  "tabhome.com",
  "tailwindapp.com",
  "talentinc.com",
  "creators.tastefullysimple.com",
  "drinktche.com",
  "tcl.com/in/store",
  "techsmith.com",
  "teepublic.com",
  "tenba.com",
  "tentandtable.com",
  "terraorigin.com",
  "textale.tech",
  "thebeardclub.com",
  "healerlabs.co.uk",
  "theblacktux.com",
  "thechainauthority.com",
  "theelephantproject.com",
  "thegongshop.com",
  "thehonestkitchen.com",
  "thehoth.com",
  "thelovery.co",
  "getmyphoenix.com",
  "thesill.com",
  "designtile.com",
  "toolnut.com",
  "thecaliforniabeachco.com",
  "thumbtack.com",
  "ticketliquidator.com",
  "ticketmaster.com.au",
  "ticketmaster.at",
  "ticketmaster.be",
  "ticketmaster.cz",
  "ticketmaster.dk",
  "ticketmaster.fi",
  "ticketmaster.de",
  "ticketmaster.ie",
  "ticketmaster.it",
  "ticketmaster.nl",
  "ticketmaster.no",
  "ticketmaster.pl",
  "ticketmaster.ch",
  "ticketmaster.co.za",
  "ticketmaster.se",
  "biletix.com",
  "ticketmaster.ae",
  "ticketmaster.co.uk",
  "ticketmaster.fr",
  "ticketnetwork.com/en/affiliate-program",
  "tickpick.com",
  "tinylandus.com",
  "tobyandace.com",
  "tokenmetrics.com",
  "tousains.com",
  "drinktrade.com",
  "trafficpeople.co.uk",
  "traveloka.com",
  "25home.com",
  "tribesigns.com",
  "tropicskincare.com",
  "troubadourgoods.com",
  "trugrit-fitness.com",
  "truestory.dk",
  "truestory.no",
  "truestory.se",
  "truewerk.com",
  "trythecbd.com",
  "tsplus.net",
  "TurboTech.co",
  "turingcollege.com",
  "teckwrapcraft.com",
  "twiggyshop.eu",
  "typhur.com",
  "coffeefriend.co.uk",
  "eneba.com",
  "kilo.health",
  "magiclinen.com",
  "ubisoft.com/en-us",
  "ueni.com",
  "uk.ulike.com",
  "unagiscooters.com",
  "unipin.com",
  "signals.com",
  "uperfectmonitor.com",
  "uplyftcapital.com",
  "resale.com",
  "mintmobile.com",
  "vaulted.com",
  "veed.io/pricing",
  "vegas.com",
  "verishop.com",
  "gtracing.com",
  "ver.so",
  "verv.com",
  "vialet.eu",
  "brunomagli.com",
  "videostorm.se",
  "vitacup.com",
  "vivoprint.com",
  "vivosun.com",
  "vrai.com",
  "walkeredison.com",
  "walkingpad.com",
  "waterdropfilter.com",
  "welleco.com",
  "westernrise.com",
  "wevideo.com",
  "whiteonwhite.co",
  "wigglekingdom.com",
  "wish.com",
  "wolfe.com",
  "woodstovekitchen.com",
  "wowangel.com",
  "wps.com/enterprise",
  "wyldcbd.com",
  "wyzant.com",
  "xndo.com",
  "yolofoods.sg",
  "youparcel.com",
  "zalora.com.tw",
  "zatchels.com",
  "zendrop.com",
  "betternatured.com",
  "gravastar.com",
  "a4c.com",
  "allergybuyersclub.com",
  "allposters.com",
  "aninebing.com",
  "anker.com",
  "aquasana.com",
  "art.com",
  "ataglance.com",
  "autonomous.ai",
  "avoyatravel.com",
  "balibras.com",
  "batteriesplus.com",
  "bioionic.com",
  "blockchain-council.org",
  "bowlersmart.com",
  "carmensol.com",
  "takeyausa.com",
  "templespa.com",
  "originalaffiliates.com/resources/links/generics/3282/147/en.php",
  "thedoublef.com",
  "tractive.com",
  "vinceunfold.com",
  "windycitynovelties.com",
  "yellowpop.com",
  "floralstreet.com",
  "flower.com/affiliates",
  "foxrentacar.com",
  "GeekBuying.com",
  "georgjensen.com/en-us",
  "gobicashmere.com/de",
  "hanes.com",
  "henryrose.com",
  "iolo.com",
  "johnnybigg.com",
  "champion.com",
  "cheapoair.ca",
  "cheapoair.com",
  "citybeach.com/us",
  "coolwick.com",
  "curls.com",
  "dancewearsolutions.com",
  "daytimer.com",
  "desire-experience.com/?affiliate=3282",
  "discountfilters.com",
  "dubarry.com",
  "edureka.co",
  "epoqueevolution.com",
  "estellabartlett.com",
  "everymanjack.com",
  "laurenmoshi.com",
  "littletrouble.com",
  "lovebrand.com",
  "magickitchen.coml",
  "maidenform.com",
  "masterdynamic.com",
  "mead.com/meadstore",
  "merlenorman.com/homepage",
  "microsoft.com",
  "microsoft.com/en-sg/store/b/home",
  "microsoftstore.com.cn",
  "microsoft.com/microsoft-365/business/affiliate-program-buy-microsoft-365-business-standard",
  "microsoft.com/en-gb",
  "rachelcomey.com",
  "rachio.com",
  "rakutenadvertising.com",
  "kobo.com/br/pt",
  "kobo.com/fr/fr",
  "kobo.com/gb/en",
  "marketing.rakuten.com",
  "resortpass.com",
  "rosewe.com",
  "wondershare.com",
  "shitthatiknit.com",
  "mywalit.com",
  "newegg.com",
  "neweggbusiness.com",
  "ofracosmetics.com",
  "ogee.com",
  "onehanesplace.com",
  "onetravel.com",
  "ouidad.com",
  "palazzoversace.ae/en",
  "tourparavel.com",
  "patmcgrath.com",
  "peaceoutskincare.com",
  "pond5.com",
  "popsockets.com",
  "p-bandai.com/us",
  "donnerdeal.com",
  "italki.com",
  "metrobrazil.com",
  "banggood.com",
  "alibaba.com",
  "vooglam.com",
  "swarovski.com/en-US",
  "italojewelry.com",
  "dailyobjects.com",
  "kokorosastudio.com",
  "ever-pretty.com",
  "cotosen.com",
  "clevguard.com",
  "ironpandafit.com",
  "tvcmall.com",
  "unidragon.com",
  "igp.com",
  "allegra-k.com",
  "biba.in",
  "lilicloth.com",
  "blushmark.com",
  "wayrates.com",
  "noracora.com",
  "daleelstore.com/ar",
  "casetify.com",
  "drop.com",
  "thesocietees.com",
  "us.andrea.com",
  "eukhost.com",
  "interserver.net",
  "2ndandcharles.com",
  "abelssoft.com",
  "addmotor.com",
  "affordableworld.com",
  "aiper.com",
  "codezeroracing.com",
  "us.allies.shop",
  "alphamarts.com",
  "amareinc.com/affiliates",
  "americanbankchecks.com/home",
  "webstore.ansi.org",
  "appypie.com",
  "arabellahair.com",
  "arka.com",
  "arlo.com",
  "ashampoo.com",
  "ashampoo.com",
  "atlasvpn.com",
  "austinair.com",
  "autoeurope.com",
  "BadCreditLoans.com",
  "banggood.com",
  "bbcmaestro.com",
  "beautyforever.com",
  "beckett.com",
  "gobeflo.com",
  "bellelily.com",
  "billo.app",
  "biotrust.com",
  "bluefinsupboards.com",
  "bobore.com",
  "booksamillion.com",
  "botanicchoice.com",
  "brookstone.com",
  "Calendars.com",
  "camper.com",
  "camper.com/en_GB",
  "canadapetcare.com",
  "capucinne.com",
  "carmellimo.com",
  "carouselchecks.com",
  "cbazaar.com",
  "cheapflightsfares.com",
  "cheapoair.com",
  "cheapoair.ca",
  "chicme.com",
  "MyChicagoSteak.com",
  "chromeworld.jp",
  "clickandgrow.com",
  "clickmeeting.com",
  "clipstudio.net/en",
  "clipstudio.net/en",
  "clipstudio.net/en",
  "greatclubs.com",
  "coasttradelines.com",
  "cocovillage.com",
  "corel.com",
  "costumes.com",
  "creativemarket.com",
  "crystaltravel.com",
  "cyberlink.com",
  "davidstea.com",
  "deeparteffects.com",
  "depositphotos.com",
  "designessentials.com",
  "dhgate.com",
  "diecastmodelswholesale.com",
  "directdeals.com",
  "discountdance.com",
  "discovercars.com",
  "docpro.com",
  "drhonow.com",
  "dreampairshoes.com",
  "dreo.com",
  "DurangoBoots.com",
  "dyper.com",
  "dyucycle.com",
  "e-mcklein.pl",
  "easeus.com",
  "ecosmetics.com",
  "edensherbals.com",
  "edenfantasys.com",
  "electronicx.de",
  "elixinol.com",
  "entertainmentearth.com",
  "ereleases.com",
  "examedge.com",
  "fanatical.com",
  "fite.tv",
  "fite.tv",
  "Fontspring.com",
  "footshop.com/en",
  "fullcompass.com",
  "fun.com",
  "funnyfuzzy.com",
  "fye.com",
  "gdata-software.com",
  "gabrielny.com",
  "gamefly.com",
  "gamersgate.com",
  "gamivo.com",
  "geekbuying.com",
  "geneverse.com",
  "getresponse.com",
  "giganews.com/usenet-special",
  "glamermaid.com",
  "glamermaid.com",
  "glamermaid.com",
  "store.greatergood.com",
  "thehalara.com",
  "HaleGroves.com",
  "haleighshope.com",
  "halloweencostumes.com",
  "HappyFeet.com",
  "hardtailforever.com",
  "healthlabs.com",
  "heivy.com",
  "herbspro.com",
  "HipHopBling.com",
  "store.hohem.com",
  "hotelcollection.com",
  "hsialife.com",
  "vive.com",
  "instaslim.com",
  "instabridge.com",
  "iolo.com",
  "iolo.com",
  "itead.cc",
  "jalbum.net",
  "jeccablac.com",
  "jeulia.com",
  "jibjab.com",
  "jurllyshe.com",
  "JustFlowers.com/affiliates",
  "K12.com",
  "k4g.com",
  "k7computing.com",
  "usa.kaspersky.com",
  "kiierr.com",
  "kiiroo.com",
  "kinguin.net",
  "KISSusa.com",
  "klaiyihair.com",
  "knfilters.com",
  "knfilters.com",
  "koio.co",
  "lalal.ai",
  "leafremedys.com",
  "level8cases.com",
  "lifelinescreening.com",
  "lightinthebox.com",
  "limecrime.com",
  "itoolab.com",
  "shop.luvmehair.com",
  "luxebidet.com",
  "maaji.co",
  "magzter.com",
  "maisonthreads.com",
  "major-lutie.com",
  "meditackits.com",
  "mensusa.com",
  "menwithskincare.com",
  "shopmicas.com",
  "millionairematch.com",
  "minitool.com",
  "mmoga.co.uk",
  "mmoga.com",
  "mobilepixels.us",
  "mobisystems.com/en-us",
  "modloft.com",
  "molnijawatch.com",
  "monster.com/resumes/writing-services",
  "monthlyclubs.com",
  "BuyMyMagicCarpet.com",
  "BuyMyMagicCarpet.com",
  "mytherabox.com",
  "mychway.shop",
  "nadula.com",
  "namecheap.com",
  "naturemade.com",
  "neo.space",
  "netpeaksoftware.com",
  "noorio.com",
  "nordpass.com",
  "nordpass.com",
  "NordVPN.com",
  "buy.norton.com",
  "numastays.com",
  "nutrishopusa.com",
  "oluxury.com",
  "onlinecheckwriter.com",
  "orbio.world",
  "originpc.com",
  "orlandovacation.com",
  "kerrits.com",
  "eshop.macsales.com",
  "eshop.macsales.com",
  "pandahall.com",
  "paragon-software.com",
  "parallels.com",
  "empowerdxlab.com",
  "shop.personalabs.com",
  "shop.petlife.com",
  "petlibro.com",
  "phrozen3d.com",
  "pittmandavis.com",
  "the-portable-monitor.com",
  "powertech.tools",
  "prioritytire.com",
  "purevpn.com",
  "pyramydair.com",
  "queens.global",
  "rdxsports.co.uk",
  "relxnow.co.uk",
  "reship.com",
  "restoro.com",
  "rexingusa.com",
  "rihoas.com",
  "robosen.com/us",
  "snowbusters.eu",
  "roxio.com",
  "rugsource.com",
  "ssww.com",
  "samplize.com",
  "store.segway.com",
  "sesameunlimited.com",
  "shelving.com",
  "sightseeingpass.com",
  "silkies.com",
  "silverrushstyle.com",
  "sky-tours.com",
  "sleepandbeyond.com",
  "smartbuyglasses.com",
  "sobelia.com",
  "stdcheck.com",
  "studentuniverse.com",
  "sundayriley.com",
  "us.supersmart.com",
  "surfshark.com",
  "switch-bot.com",
  "switch-bot.com",
  "power.tenergy.com",
  "tengtoolsusa.com",
  "testclear.com",
  "theayurvedaexperience.com",
  "thefiveshotels.com",
  "thefuturerocks.com",
  "theluxurycloset.com",
  "thesslstore.com",
  "thewalkingcompany.com",
  "thriftytraveler.com",
  "ticketnetwork.com",
  "tidio.com",
  "de.tineco.com",
  "my.toneitup.com",
  "totalgymdirect.com",
  "tours4fun.com",
  "trampolinepartsandsupply.com",
  "travelup.com",
  "TrinityRoad.com",
  "trip.com",
  "trustedtours.com",
  "ulike.com",
  "unice.com",
  "unlimitedbiking.com",
  "unlocator.com",
  "vantrue.com",
  "velia.net/shop",
  "vermafarms.com",
  "vevor.com",
  "vitalsource.com",
  "vooglam.com",
  "vueling.com",
  "waproduction.com",
  "walkingpad.com",
  "walkingpad.com",
  "webhostingpad.com",
  "wemax.com",
  "winebasket.com",
  "wok-store.com",
  "wondershare.com",
  "yarden.com",
  "zaful.com",
  "zchocolat.com",
  "wishr.app",
  "amazon"
]

export const IsPartners = (): boolean => {
  const url = window.location.href

  for (const partener of PARTNERS) {
    if (url.includes(partener)) {
      return true
    }
  }

  return false
}
