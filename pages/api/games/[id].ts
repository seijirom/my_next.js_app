import type { NextApiRequest, NextApiResponse } from 'next'

type Game = {
  id: string;
  title: string;
  genre: string;
}

// 本来は外部のデータを取得する
function getGameData(id: string): Game | undefined {
  const games: Game[] = [
    { id: '1', title: 'ドンキーコング', genre: 'アクション' },
    { id: '2', title: 'ゼビウス', genre: 'シューティング' },
    { id: '3', title: 'ロードランナー', genre: 'パズル' }
  ]
  return games.find(game => game.id === id)
}

export default (req: NextApiRequest, res: NextApiResponse<Game | undefined>) => {
  const id = req.query.id
  const game = getGameData(id as string)
  res.status(200).json(game)
}