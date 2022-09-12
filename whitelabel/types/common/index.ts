export interface CollectionI {
    name: string;
    address?: string;
    description?: string;
    icon_url?: string;
    collection_image_url?: string;
    project_id?: string;
    metadata_api_url?: string;
    creatorId?: string;
    // stats: StatTile;
    website_url?: string;
    twitter_url?: string;
    facebook_url?: string;
    discord_url?: string;
  }
  
  export interface AssetI {
      token_address?: string;
      token_id?: string;
      id?: string;
      user: string;
      status?: string;
      uri?: any;
      name: string;
      description?: string;
      image_url?: string;
      metadata?: any;
      collection?: {
        name: string;
        icon_url: string;
      };
      created_at?: Date;
      updated_at?: Date;
      popularity: number;
      collectionDetails?: CollectionI;
      orders?: {
        sell_orders: any;
        buy_orders: any;
      };
      rarity?: any;
      quantity?: number;
      followers?: number;
      token_standard?: string;
      blockchain?: string;
    }