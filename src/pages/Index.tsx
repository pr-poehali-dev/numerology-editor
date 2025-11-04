import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [birthDate, setBirthDate] = useState('');
  const [lifePathNumber, setLifePathNumber] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const { toast } = useToast();

  const calculateLifePath = () => {
    if (!birthDate) return;
    
    const digits = birthDate.replace(/\D/g, '').split('').map(Number);
    let sum = digits.reduce((acc, curr) => acc + curr, 0);
    
    while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
      sum = sum.toString().split('').map(Number).reduce((acc, curr) => acc + curr, 0);
    }
    
    setLifePathNumber(sum);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: 'Заявка отправлена! ✨',
      description: 'Мы свяжемся с вами в ближайшее время.',
    });
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  const services = [
    {
      icon: 'Sparkles',
      title: 'Нумерологический анализ',
      description: 'Глубокий расчет чисел судьбы, совместимости и жизненного пути',
      price: 'от 3000 ₽'
    },
    {
      icon: 'Video',
      title: 'Видеомонтаж',
      description: 'Профессиональный монтаж для бизнеса, влогов и социальных сетей',
      price: 'от 5000 ₽'
    },
    {
      icon: 'Star',
      title: 'Персональный видео-гороскоп',
      description: 'Уникальное сочетание: нумерологический прогноз в формате видео',
      price: 'от 8000 ₽'
    },
    {
      icon: 'Wand2',
      title: 'Брендинг по числам',
      description: 'Создание визуального стиля на основе вашей нумерологической карты',
      price: 'от 15000 ₽'
    }
  ];

  const portfolio = [
    {
      title: 'Свадебный фильм + нумерология пары',
      category: 'Видео + Анализ',
      duration: '12:34'
    },
    {
      title: 'Бизнес-презентация "Числа успеха"',
      category: 'Корпоративное видео',
      duration: '5:21'
    },
    {
      title: 'Личный бренд предпринимателя',
      category: 'Видеоконсалтинг',
      duration: '8:45'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      text: 'Невероятно! Нумерологический расчет помог найти идеальную дату запуска проекта, а видео получилось магическим.',
      number: '7'
    },
    {
      name: 'Дмитрий Соколов',
      text: 'Профессиональный монтаж и точный анализ чисел. Теперь понимаю свой жизненный путь гораздо лучше.',
      number: '3'
    },
    {
      name: 'Мария Иванова',
      text: 'Уникальный подход! Видео-гороскоп стал моим главным инструментом планирования на год.',
      number: '11'
    }
  ];

  const numberMeanings: { [key: number]: string } = {
    1: 'Лидер и первопроходец. Вы полны энергии и стремления к независимости.',
    2: 'Миротворец и дипломат. Ваша сила в гармонии и сотрудничестве.',
    3: 'Творец и коммуникатор. Вы одарены самовыражением и оптимизмом.',
    4: 'Строитель и практик. Стабильность и порядок — ваши козыри.',
    5: 'Авантюрист и исследователь. Свобода и перемены — ваша стихия.',
    6: 'Заботливый и ответственный. Семья и служение — ваш путь.',
    7: 'Мудрец и аналитик. Духовный поиск и познание — ваша миссия.',
    8: 'Магнат и визионер. Материальный успех и власть в ваших руках.',
    9: 'Гуманист и идеалист. Вы здесь, чтобы помогать человечеству.',
    11: 'Мастер-число: духовный проводник с высшей интуицией.',
    22: 'Мастер-число: мастер материализации грандиозных идей.',
    33: 'Мастер-число: учитель мира и безусловной любви.'
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20" />
        
        <div className="absolute inset-0 opacity-30">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute text-6xl font-heading text-primary/10 animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.floor(Math.random() * 9) + 1}
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-5xl text-center space-y-8 animate-fade-in">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-heading font-bold text-glow">
            Числа & Кадры
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Уникальный синтез нумерологии и профессионального видеомонтажа. 
            Создаём визуальные истории, основанные на энергии чисел.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="text-lg card-glow">
              <Icon name="Sparkles" className="mr-2" />
              Рассчитать число судьбы
            </Button>
            <Button size="lg" variant="outline" className="text-lg">
              <Icon name="Video" className="mr-2" />
              Портфолио видео
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-4 text-glow">Услуги</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            Интеграция мистики чисел и магии видеомонтажа
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <Card 
                key={idx} 
                className="card-glow border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-heading">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-accent text-xl font-semibold">{service.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-16 text-glow">
            Нумерологический калькулятор
          </h2>
          
          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-3xl font-heading">Рассчитайте число жизненного пути</CardTitle>
              <CardDescription className="text-base">
                Введите дату рождения и узнайте своё главное число
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="birthdate" className="text-lg">Дата рождения</Label>
                <Input 
                  id="birthdate"
                  type="date" 
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                  className="text-lg"
                />
              </div>
              
              <Button 
                onClick={calculateLifePath} 
                size="lg" 
                className="w-full text-lg card-glow"
              >
                <Icon name="Calculator" className="mr-2" />
                Рассчитать
              </Button>

              {lifePathNumber !== null && (
                <div className="mt-8 p-8 bg-primary/10 rounded-lg border border-primary/30 animate-scale-in">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary text-primary-foreground text-5xl font-heading font-bold card-glow animate-pulse-glow">
                      {lifePathNumber}
                    </div>
                  </div>
                  <p className="text-lg leading-relaxed text-center">
                    {numberMeanings[lifePathNumber]}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-16 text-glow">Портфолио</h2>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3 mb-12">
              <TabsTrigger value="all">Все работы</TabsTrigger>
              <TabsTrigger value="video">Видео</TabsTrigger>
              <TabsTrigger value="numerology">Нумерология</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-3 gap-6">
              {portfolio.map((item, idx) => (
                <Card key={idx} className="card-glow border-primary/20 hover:border-primary/50 transition-all hover:scale-105">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-t-lg flex items-center justify-center">
                    <Icon name="Play" size={48} className="text-primary" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading">{item.title}</CardTitle>
                    <CardDescription className="flex items-center justify-between">
                      <span>{item.category}</span>
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        {item.duration}
                      </span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </TabsContent>
            
            <TabsContent value="video" className="text-center text-muted-foreground py-12">
              Видео-работы скоро появятся здесь
            </TabsContent>
            
            <TabsContent value="numerology" className="text-center text-muted-foreground py-12">
              Нумерологические консультации скоро появятся здесь
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section className="py-24 px-4 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-16 text-glow">Отзывы</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, idx) => (
              <Card key={idx} className="card-glow border-primary/20 relative overflow-hidden">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-6xl font-heading text-primary/30">{testimonial.number}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{testimonial.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{testimonial.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-heading text-center mb-16 text-glow">Блог</h2>
          
          <div className="space-y-6">
            {[
              { title: 'Как числа влияют на творческий процесс', date: '15 октября 2024', icon: 'BookOpen' },
              { title: 'Монтаж видео в ритме вашего числа судьбы', date: '8 октября 2024', icon: 'Film' },
              { title: 'Нумерология в брендинге: кейс клиента', date: '1 октября 2024', icon: 'TrendingUp' }
            ].map((post, idx) => (
              <Card key={idx} className="card-glow border-primary/20 hover:border-primary/50 transition-all hover:scale-[1.02] cursor-pointer">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={post.icon} size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-heading">{post.title}</CardTitle>
                    <CardDescription className="flex items-center gap-2 mt-1">
                      <Icon name="Calendar" size={14} />
                      {post.date}
                    </CardDescription>
                  </div>
                  <Icon name="ArrowRight" className="text-primary" />
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-br from-primary/10 via-background to-accent/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading mb-4 text-glow">Записаться на консультацию</h2>
            <p className="text-xl text-muted-foreground">Откройте для себя магию чисел и силу визуального повествования</p>
          </div>
          
          <Card className="card-glow border-primary/30">
            <CardHeader>
              <CardTitle className="text-3xl font-heading">Заполните форму</CardTitle>
              <CardDescription className="text-base">
                Мы подберём для вас идеальную услугу на основе ваших целей
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Введите ваше имя"
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-base">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="text-base"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-base">Телефон</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+7 (___) ___-__-__"
                      className="text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-base">Интересующая услуга *</Label>
                    <Select
                      required
                      value={formData.service}
                      onValueChange={(value) => setFormData({ ...formData, service: value })}
                    >
                      <SelectTrigger className="text-base">
                        <SelectValue placeholder="Выберите услугу" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="numerology">Нумерологический анализ</SelectItem>
                        <SelectItem value="video">Видеомонтаж</SelectItem>
                        <SelectItem value="horoscope">Персональный видео-гороскоп</SelectItem>
                        <SelectItem value="branding">Брендинг по числам</SelectItem>
                        <SelectItem value="other">Другое</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-base">Сообщение</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Расскажите о вашем запросе или задайте вопрос..."
                    className="min-h-32 text-base"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full text-lg card-glow">
                  <Icon name="Send" className="mr-2" />
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground">© 2024 Числа & Кадры. Все права защищены.</p>
          <div className="flex gap-6">
            <Button variant="ghost" size="icon">
              <Icon name="Instagram" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Youtube" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Mail" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}