export interface ItemProperties {
    icon: string;
    answer: string;
    correct: string;
    onGameOver?: () => void;
    changeQuestion: () => void;
}
