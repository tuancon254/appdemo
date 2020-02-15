import { StyleSheet } from 'react-native';
import { RecipeCard } from '../../AppStyles';

const styles = StyleSheet.create({
  container: RecipeCard.container,
  photo: RecipeCard.photo,
  title: RecipeCard.title,
  category: RecipeCard.category,
  wellcome: {
    borderWidth: 1,
    height: 200,
    flex: 1,
    borderRadius: 5,
    padding: 20,
    margin: 20,
  },
});

export default styles;
