import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Skeleton from "@mui/material/Skeleton";

const ShopItemSkeleton = () => {
  return (
    <Card>
      <Skeleton animation="wave" height={100  } variant="rectangular" />
      <CardContent>
        <Skeleton variant="text" width={210} height={20} />
        <Skeleton variant="text" width={210} height={20} />
        <Skeleton variant="text" width={180} height={20} />

      </CardContent>
      <CardActions>
        <Skeleton variant="rectangular" width={80} height={30} />
      </CardActions>
    </Card>
  );
};

export default ShopItemSkeleton;
