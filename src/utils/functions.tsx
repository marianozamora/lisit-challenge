export const getRandomColor = () => {
    const colors = [
        'red',
        'blue',
        'green',
        'yellow',
        'orange',
        'purple'];
    const random = Math.floor(Math.random() * colors.length);
    return colors[random];
};

export const convertDate = (date: string) => {
    const newDate = new Date(date);
    return newDate.toDateString();
};

export const generateDescription = (data: any) => {
    const description = [];
    if (data.birth_year) {
        description.push(`Birth Year: ${data.birth_year}`);
    }
    if (data.model) {
        description.push(`Model: ${data.model}`);
    }
    if (data.classification) {
        description.push(`Classification: ${data.classification}`);
    }
    if (data.terrain) {
        description.push(`Terrain: ${data.terrain}`);
    }
    return description;
}