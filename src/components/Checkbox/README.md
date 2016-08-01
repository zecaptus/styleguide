Simple checkbox

    <Checkbox />
    
Custom icon checkbox

    const ActionFavorite = require('material-ui/svg-icons/action/favorite').default;
    const ActionFavoriteBorder = require('material-ui/svg-icons/action/favorite-border').default;
    
    <Checkbox
          checkedIcon={<ActionFavorite />}
          uncheckedIcon={<ActionFavoriteBorder />}
          label="Custom icon"
        />