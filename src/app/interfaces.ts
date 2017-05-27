interface IPhotoUrls{
  id: number,
  thumbnail: {
    label: string,
    width: string,
    height: string,
    source: string,
    url: string,
    media: string
  },
  orginal: {
    label: string,
    width: string,
    height: string,
    source: string,
    url: string,
    media: string
  }
}
interface IPhotoListElement{
    id: string,
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
  id: string,
  owner: {
    nsid: string,
    username: string,
    realname: string,
    location: string,
    iconserver: string,
    iconfarm: number,
    path_alias: string
  },
  title: {
    _content: string
  },
  description: {
    _content: string
  },
  dates: {
    posted: string,
    taken: string,
    takengranularity: string,
    takenunknown: string,
    lastupdate: string
  }
}
export { IPhotoListElement, IPhotoListElementDetails , IPhotoUrls}