import { MemeData } from './Meme.types';

export async function getList() {
  const { data } = await fetch('https://api.imgflip.com/get_memes').then(r =>
    r.json()
  );
  return data.memes as MemeData[];
}

function objectToQueryParams(obj: object): string {
  const params = Object.entries(obj).map(
    ([key, value]) => `${encodeURI(key)}=${encodeURI(value)}`
  );
  return `?${params.join('&')}`;
}

export async function create(
  id: string,
  text1: string,
  text2 = ''
): Promise<string> {
  const params = {
    username: 'alpanyukov',
    password: 'olenevod',
    text0: text1,
    text1: text2,
    template_id: id
  };

  const response = await fetch(
    `https://api.imgflip.com/caption_image${objectToQueryParams(params)}`
  ).then(r => r.json());

  return response.data.url;
}
