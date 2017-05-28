interface IPhotoUrls{
  id: number,
  thumbnailUrl:string,
  orginalUrl:string
}

interface IPhotoListElement{
    id: number,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: boolean,
    isfriend: boolean,
    isfamily: boolean
}

interface IPhotoListElementDetails{
  id: number,
  secret: string,
  exif:[
    {
      label: string,
      raw:{
        _content: string
      }
    }
  ]
}

interface IPhotoPrepared{
  photoElement: IPhotoListElement,
  url: IPhotoUrls
}

interface IPageRange{
  active: number,
  pageRage: [number]
}


export { IPhotoListElement, IPhotoListElementDetails, IPhotoUrls, IPhotoPrepared, IPageRange }