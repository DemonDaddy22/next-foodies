import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';

const db = sql('meals.db');

export const getMeals = async () => (
  new Promise((res) => {
    setTimeout(() => {
      res(db.prepare('SELECT * FROM meals').all())
    }, 1000);
  })
);

export const getMeal = (slug) => (
  db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
);

export const saveMeal = async (meal) => {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);
  const imgExtension = meal.image.name .split('.').pop();
  const imgName = `${meal.slug}-${Date.now()}.${imgExtension}`;

  const formData = new FormData();
  formData.append('file', meal.image);
  formData.append('upload_preset', 'next-level-foodie-preset');

  const data = await fetch(`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/image/upload`, {
    method: 'POST',
    body: formData,
  }).then((res) => res.json());
  
  meal.image = data.secure_url;
  db.prepare(`
    INSERT INTO meals
     (slug, title, summary, instructions, image, creator, creator_email) 
    VALUES
     (@slug, @title, @summary, @instructions, @image, @creator, @creatorEmail)
  `).run(meal);
};