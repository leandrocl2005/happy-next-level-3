import Orphanage from '../models/Orphanage';
import imageView from './images_view';

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      about: orphanage.about,
      instructions: orphanage.instructions,
      open_in_hours: orphanage.open_in_hours,
      open_in_weekends: orphanage.open_in_weekends,
      images: imageView.renderMany(orphanage.images)
    }
  },
  renderMany(orphanages: Orphanage[]) {{
    return orphanages.map(orphanage => this.render(orphanage));
  }}
}