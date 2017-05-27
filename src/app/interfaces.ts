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
      label:string,
      raw:{
        _content:string
      }
    }
  ]
}
export { IPhotoListElement, IPhotoListElementDetails , IPhotoUrls}