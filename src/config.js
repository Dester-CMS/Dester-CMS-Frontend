import Logo from "./assets/logo.svg";
import LogoFull from "./assets/logo-full.svg";
import Favicon from "./assets/favicon.png";
import ErrorImg from "./assets/error.png";
import GreetingImg from "./assets/greeting.png";
import PosterPlaceholder from "./assets/rectangle-poster.svg";
import BackdropPlaceholder from "./assets/rectangle-backdrop.svg";

// App Base Config
const APP_LOGO = Logo;
const APP_LOGO_FULL = LogoFull;
const APP_FAVICON = Favicon;
const APP_ERROR_IMG = ErrorImg;
const APP_GREETING_IMG = GreetingImg;

// The Movie Database (TMDB) [https://www.themoviedb.org/] CREDENTIALS

const TMDB_API_URL = "https://api.themoviedb.org/3/";
const TMDB_API_TRAILING_URL_01 = "";
const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const TMDB_IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";
const POSTER_SIZE = "w500";
const BACKDROP_SIZE = "w1280";

// SugoiSama Strapi Backend (S_API) CREDENTIALS

const S_API_URL = process.env.REACT_APP_S_API_URL;
const S_API_ROUTE_MOVIES = "/movies";
const S_API_ROUTE_SERIES = "/series";

// Skeleton Loading Asset Config

const SKELETON_BASE_COLOR = "#162B45"
const SKELETON_SHINE_COLOR = "#2e3e73";
const SKELETON_WIDTH_70 = 70;
const SKELETON_WIDTH_280 = 280;
const SKELETON_WIDTH_300 = 300;
const SKELETON_HEIGHT_20 = 20;

// Placeholder Images

const PLACEHOLDER_POSTER = PosterPlaceholder;
const PLACEHOLDER_BACKDROP = BackdropPlaceholder;

export {
    // App Exports
    APP_LOGO,
    APP_LOGO_FULL,
    APP_FAVICON,
    APP_ERROR_IMG,
    APP_GREETING_IMG,
    // Tmdb Exports
    TMDB_API_URL,
    TMDB_API_TRAILING_URL_01,
    TMDB_API_KEY,
    TMDB_IMAGE_BASE_URL,
    POSTER_SIZE,
    BACKDROP_SIZE,
    // Backend Exports
    S_API_URL,
    S_API_ROUTE_MOVIES,
    S_API_ROUTE_SERIES,
    // Skeleton Exports
    SKELETON_BASE_COLOR,
    SKELETON_SHINE_COLOR,
    SKELETON_WIDTH_70,
    SKELETON_WIDTH_280,
    SKELETON_WIDTH_300,
    SKELETON_HEIGHT_20,
    // Placeholder Exports
    PLACEHOLDER_POSTER,
    PLACEHOLDER_BACKDROP,
};