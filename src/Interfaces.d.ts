export interface Orders {
  productID: string
  productTitle: string
  seller: string
  bidPrice?: number
  buyPrice?: number
  productTitle?: string
  status: string
  OrderQuantity: number
  PickupDate: string
}

export interface LastUserBids {
  userID: string
  // user: string
  orders: Orders[]
}

export interface seller {
  id: string
  name: string
  email: string
}

export interface Listings {
  listingID: string
  title: string
  type: string
  status: string
  thumbnailURL?: string
  listedbuy: number
  highestBid?: number
  MSP: number
  listedQuantity: number
  soldQuantity?: number
  PickupDate: string
  hasMyBid?: boolean
  myOrders?: Orders
  seller: seller
  sellerEarning?: number
}
