// Detail d'un jeu

export interface PcRequirements {
    minimum: string;
}

export interface PriceOverview {
    currency: string;
    initial: number;
    final: number;
    discount_percent: number;
}

export interface Sub {
    packageid: string;
    percent_savings_text: string;
    percent_savings: number;
    option_text: string;
    option_description: string;
    can_get_free_license: string;
    is_free_license: boolean;
    price_in_cents_with_discount: number;
}

export interface PackageGroup {
    name: string;
    title: string;
    description: string;
    selection_text: string;
    save_text: string;
    display_type: number;
    is_recurring_subscription: string;
    subs: Sub[];
}

export interface Platforms {
    windows: boolean;
    mac: boolean;
    linux: boolean;
}

export interface Metacritic {
    score: number;
    url: string;
}

export interface Category {
    id: number;
    description: string;
}

export interface Genre {
    id: string;
    description: string;
}

export interface Screenshot {
    id: number;
    path_thumbnail: string;
    path_full: string;
}

export interface Recommendations {
    total: number;
}

export interface ReleaseDate {
    coming_soon: boolean;
    date: string;
}

export interface SupportInfo {
    url: string;
    email: string;
}

export interface GameDetails {
    type: string;
    name: string;
    steam_appid: number;
    required_age: number;
    is_free: boolean;
    detailed_description: string;
    about_the_game: string;
    short_description: string;
    supported_languages: string;
    header_image: string;
    website?: any;
    pc_requirements: PcRequirements;
    mac_requirements: any[];
    linux_requirements: any[];
    developers: string[];
    publishers: string[];
    price_overview: PriceOverview;
    packages: string[];
    package_groups: PackageGroup[];
    platforms: Platforms;
    metacritic: Metacritic;
    categories: Category[];
    genres: Genre[];
    screenshots: Screenshot[];
    recommendations: Recommendations;
    release_date: ReleaseDate;
    support_info: SupportInfo;
    background: string;
}

// Steam games
export interface SteamGame {
    appid: number;
    name: string;
}
