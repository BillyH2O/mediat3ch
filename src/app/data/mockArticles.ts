import { BlogArticle } from '../types/blog';

export const mockArticles: BlogArticle[] = [
  {
    id: '1',
    title: 'L\'Intelligence Artificielle révolutionne le développement',
    excerpt: 'Découvrez comment l\'IA transforme la manière dont nous développons des applications modernes.',
    content: `
      <h2>L'impact de l'IA sur le développement moderne</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      
      <h3>Les outils d'IA pour les développeurs</h3>
      <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
      
      <h3>L'avenir du développement assisté par IA</h3>
      <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
      
      <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
    `,
    image: '/article1.png',
    format: 'Analyse',
    theme: 'IA',
    publishDate: '2024-01-15',
    readTime: 8,
    author: 'Jean Dupont'
  },
  {
    id: '2',
    title: 'Interview avec un expert en Réalité Virtuelle',
    excerpt: 'Rencontre avec le pionnier de la VR qui révolutionne l\'industrie du divertissement.',
    content: `
      <h2>Portrait d'un visionnaire de la VR</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel augue nec eros tincidunt fermentum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
      
      <h3>Les débuts dans la réalité virtuelle</h3>
      <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.</p>
      
      <p>Aenean nec lorem. In porttitor. Donec laoreet nonummy augue. Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc.</p>
      
      <h3>L'évolution technologique</h3>
      <p>Mauris egestas at, tellus. Pellentesque a dui sit amet mi ullamcorper vehicula. Integer adipiscing risus a sem. Nullam quis massa sit amet nibh viverra malesuada.</p>
      
      <p>Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
    `,
    image: '/article2.png',
    format: 'Interview',
    theme: 'Réalité Virtuelle',
    publishDate: '2024-01-12',
    readTime: 12,
    author: 'Marie Martin'
  },
  {
    id: '3',
    title: 'Tutoriel : Sécuriser vos applications web',
    excerpt: 'Guide complet pour implémenter les meilleures pratiques de sécurité dans vos projets.',
    content: `
      <h2>Les fondamentaux de la sécurité web</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
      
      <h3>Authentification et autorisation</h3>
      <p>Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.</p>
      
      <pre><code>
// Exemple d'implémentation JWT
const token = jwt.sign(
  { userId: user.id },
  process.env.JWT_SECRET,
  { expiresIn: '24h' }
);
      </code></pre>
      
      <h3>Protection contre les attaques communes</h3>
      <p>Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue.</p>
      
      <p>Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus.</p>
    `,
    image: '/article3.png',
    format: 'Tutoriel',
    theme: 'Sécurité',
    publishDate: '2024-01-10',
    readTime: 15,
    author: 'Pierre Durand'
  },
  {
    id: '4',
    title: 'Actualité : L\'informatique quantique accessible au grand public',
    excerpt: 'Les dernières avancées rendent l\'informatique quantique plus accessible que jamais.',
    content: `
      <h2>Une révolution technologique en marche</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec libero. Suspendisse bibendum. Cras id urna. Aliquam feugiat tellus ut neque.</p>
      
      <h3>Les applications concrètes</h3>
      <p>Nulla facilisis, risus a rhoncus fermentum, tellus tellus lacinia purus, et dictum nunc justo sit amet elit. Aliquam erat volutpat.</p>
      
      <p>Morbi imperdiet, mauris ac auctor dictum, nisl ligula egestas nulla, et sollicitudin lorem quis bibendum sapien lacus non urna.</p>
      
      <h3>L'impact sur l'industrie</h3>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Fusce id purus. Ut varius tincidunt libero.</p>
      
      <p>Phasellus dolor. Maecenas vestibulum mollis diam. Pellentesque ut neque. Pellentesque habitant morbi tristique senectus et netus.</p>
      
      <h3>Perspectives d'avenir</h3>
      <p>Et malesuada fames ac turpis egestas. In dui magna, posuere eget, vestibulum et, tempor auctor, justo. In ac felis quis tortor malesuada pretium.</p>
    `,
    image: '/article4.png',
    format: 'Actualité',
    theme: 'Quantique',
    publishDate: '2024-01-08',
    readTime: 10,
    author: 'Sophie Leroy'
  },
  {
    id: '5',
    title: 'Analyse : L\'évolution des jeux vidéo en 2024',
    excerpt: 'Retour sur les tendances qui marquent l\'industrie du gaming cette année.',
    content: `
      <h2>Les tendances marquantes de 2024</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque fermentum massa vel enim feugiat gravida.</p>
      
      <h3>Le cloud gaming</h3>
      <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
      
      <h3>L'IA dans les jeux</h3>
      <p>Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.</p>
    `,
    image: '/article1.png',
    format: 'Analyse',
    theme: 'Jeux-vidéo',
    publishDate: '2024-01-05',
    readTime: 7,
    author: 'Lucas Bernard'
  },
  {
    id: '6',
    title: 'Tutoriel : Débuter avec l\'informatique quantique',
    excerpt: 'Introduction pratique aux concepts fondamentaux de l\'informatique quantique.',
    content: `
      <h2>Les bases de l'informatique quantique</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.</p>
      
      <h3>Les qubits expliqués</h3>
      <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.</p>
    `,
    image: '/article2.png',
    format: 'Tutoriel',
    theme: 'Quantique',
    publishDate: '2024-01-03',
    readTime: 20,
    author: 'Emma Rousseau'
  }
]; 