import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react';
import React, { FC } from 'react';
import { Game } from '../hooks/UseGames';
import PlatformIconList from './PlatformIconList';

interface GameCardProps {
  game: Game;
}

const GameCard: FC<GameCardProps> = ({ game }) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
