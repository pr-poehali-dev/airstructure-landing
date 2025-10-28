import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Index() {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      title: "Спортивный комплекс",
      size: "80 × 120 м",
      height: "18 м",
      material: "ПВХ мембрана 850 г/м²",
      pressure: "250 Па",
      image: "https://cdn.poehali.dev/projects/409a822a-2f06-41ca-93e4-9c635c1ad2bc/files/e811af22-e503-4e5b-803d-01b3d81e46a7.jpg"
    },
    {
      title: "Промышленный склад",
      size: "60 × 100 м",
      height: "12 м",
      material: "ПВХ мембрана 1050 г/м²",
      pressure: "300 Па",
      image: "https://cdn.poehali.dev/projects/409a822a-2f06-41ca-93e4-9c635c1ad2bc/files/d9413a39-d2d6-4d1f-8b7a-3f08158608b2.jpg"
    },
    {
      title: "Торговый центр",
      size: "100 × 150 м",
      height: "22 м",
      material: "ETFE мембрана",
      pressure: "280 Па",
      image: "https://cdn.poehali.dev/projects/409a822a-2f06-41ca-93e4-9c635c1ad2bc/files/b8dd5487-d1af-416b-b1fa-46273af4adee.jpg"
    }
  ];

  const technologies = [
    {
      icon: "Wind",
      title: "Система поддержки давления",
      description: "Автоматическая регулировка внутреннего давления с резервированием"
    },
    {
      icon: "Shield",
      title: "Армированные мембраны",
      description: "Многослойные материалы с повышенной прочностью до 1500 г/м²"
    },
    {
      icon: "Thermometer",
      title: "Климат-контроль",
      description: "Интегрированные системы отопления и вентиляции"
    },
    {
      icon: "Zap",
      title: "Энергоэффективность",
      description: "Снижение затрат на отопление до 60% по сравнению с классическими зданиями"
    }
  ];

  const applications = [
    { icon: "Dumbbell", title: "Спорт", desc: "Манежи, корты, бассейны" },
    { icon: "Factory", title: "Промышленность", desc: "Склады, ангары, цеха" },
    { icon: "ShoppingCart", title: "Торговля", desc: "Рынки, выставки, ярмарки" },
    { icon: "Tractor", title: "Сельское хозяйство", desc: "Хранилища, фермы" },
    { icon: "Plane", title: "Авиация", desc: "Ангары для самолётов" },
    { icon: "Package", title: "Логистика", desc: "Терминалы, хабы" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">ВОЗДУХОСТРОЙ</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">Проекты</a>
            <a href="#tech" className="hover:text-primary transition-colors">Технологии</a>
            <a href="#applications" className="hover:text-primary transition-colors">Применение</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button size="lg" className="hidden md:block">Консультация</Button>
        </div>
      </nav>

      <section className="relative h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-7xl md:text-8xl font-bold mb-6 leading-tight">
              ВОЗДУХООПОРНЫЕ
              <span className="block text-primary">СООРУЖЕНИЯ</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
              Проектируем и строим крупномасштабные конструкции нового поколения. 
              Надёжность, скорость монтажа, экономическая эффективность.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="text-lg px-8 h-14">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать проект
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 h-14">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать каталог
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-16 max-w-2xl">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">150+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Реализованных проектов</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">20 000м²</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Максимальная площадь</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">25 лет</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Срок службы</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">РЕАЛИЗОВАННЫЕ ПРОЕКТЫ</h2>
            <p className="text-xl text-muted-foreground">Масштабные конструкции по всей России</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-lg overflow-hidden group">
              <img 
                src={projects[activeProject].image} 
                alt={projects[activeProject].title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <h3 className="text-3xl font-bold mb-2">{projects[activeProject].title}</h3>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Icon name="Maximize2" className="mb-3 text-primary" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Размеры</div>
                  <div className="text-2xl font-bold">{projects[activeProject].size}</div>
                </Card>
                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Icon name="ArrowUp" className="mb-3 text-primary" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Высота</div>
                  <div className="text-2xl font-bold">{projects[activeProject].height}</div>
                </Card>
                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Icon name="Layers" className="mb-3 text-primary" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Материал</div>
                  <div className="text-lg font-bold">{projects[activeProject].material}</div>
                </Card>
                <Card className="p-6 border-2 hover:border-primary transition-colors">
                  <Icon name="Gauge" className="mb-3 text-primary" size={28} />
                  <div className="text-sm text-muted-foreground mb-1">Давление</div>
                  <div className="text-2xl font-bold">{projects[activeProject].pressure}</div>
                </Card>
              </div>

              <div className="flex gap-3">
                {projects.map((project, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveProject(idx)}
                    className={`flex-1 py-3 px-4 rounded-md transition-all font-medium ${
                      activeProject === idx 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-card border border-border hover:border-primary'
                    }`}
                  >
                    {idx + 1}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tech" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ТЕХНОЛОГИИ</h2>
            <p className="text-xl text-muted-foreground">Передовые инженерные решения</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary transition-all group hover:scale-105">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                  <Icon name={tech.icon} className="text-primary group-hover:text-primary-foreground transition-colors" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{tech.description}</p>
              </Card>
            ))}
          </div>

          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-accent/5 border-2">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Преимущества технологии</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Скорость монтажа — от 2 недель</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Стоимость ниже на 40-60% традиционных конструкций</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Мобильность — возможность демонтажа и переноса</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="CheckCircle2" className="text-primary mt-1 flex-shrink-0" size={20} />
                      <span>Эксплуатация при температуре от -50°C до +60°C</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4">Системы безопасности</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Резервные воздуходувки с автозапуском</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Аварийные выходы с системой шлюзования</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Датчики давления и автоматика контроля</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Icon name="Shield" className="text-accent mt-1 flex-shrink-0" size={20} />
                      <span>Огнестойкие материалы класса G1/B1</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section id="applications" className="py-24 bg-card/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">ОБЛАСТИ ПРИМЕНЕНИЯ</h2>
            <p className="text-xl text-muted-foreground">Универсальные решения для любых задач</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {applications.map((app, idx) => (
              <Card key={idx} className="p-8 border-2 hover:border-primary transition-all group cursor-pointer hover:scale-105">
                <Icon name={app.icon} className="text-primary mb-4 group-hover:scale-110 transition-transform" size={40} />
                <h3 className="text-2xl font-bold mb-2">{app.title}</h3>
                <p className="text-muted-foreground">{app.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold mb-4">СВЯЗАТЬСЯ С НАМИ</h2>
              <p className="text-xl text-muted-foreground">Получите консультацию инженера в течение 24 часов</p>
            </div>

            <Card className="p-8 md:p-12 border-2">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Телефон</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+7 (___) ___-__-__"
                  />
                </div>
              </div>
              
              <div className="mb-8">
                <label className="text-sm font-medium mb-2 block">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="email@company.ru"
                />
              </div>

              <div className="mb-8">
                <label className="text-sm font-medium mb-2 block">Сообщение</label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-background border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Расскажите о вашем проекте..."
                />
              </div>

              <Button size="lg" className="w-full text-lg h-14">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить заявку
              </Button>
            </Card>

            <div className="grid md:grid-cols-3 gap-6 mt-12">
              <Card className="p-6 text-center border-2">
                <Icon name="Phone" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium mb-1">Телефон</div>
                <div className="text-muted-foreground">+7 (495) 123-45-67</div>
              </Card>
              <Card className="p-6 text-center border-2">
                <Icon name="Mail" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium mb-1">Email</div>
                <div className="text-muted-foreground">info@vozduhostroy.ru</div>
              </Card>
              <Card className="p-6 text-center border-2">
                <Icon name="MapPin" className="mx-auto mb-3 text-primary" size={32} />
                <div className="font-medium mb-1">Офис</div>
                <div className="text-muted-foreground">Москва, ул. Промышленная</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-2xl font-bold text-primary">ВОЗДУХОСТРОЙ</div>
            <div className="text-sm text-muted-foreground">
              © 2024 Воздухоопорные сооружения. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="outline" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="outline" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
