# Guia do Framer Motion no Next.js

## ✅ Instalação Concluída

O Framer Motion foi instalado com sucesso na sua aplicação Next.js! Versão: `12.23.12`

## 🚀 Como Usar

### 1. Importação Básica
```javascript
import { motion } from 'framer-motion';
```

### 2. Componente Básico
```javascript
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
>
    Conteúdo animado
</motion.div>
```

## 📚 Exemplos Implementados

### No arquivo `partners.js`:
- **Animação de entrada**: Elementos aparecem com fade-in e slide
- **Animações em sequência**: Delay entre elementos
- **Hover effects**: Escala e interação

### No arquivo `framer-examples.js`:
- **Animações em sequência** com `staggerChildren`
- **Hover e tap animations**
- **Animações de scroll** com `whileInView`
- **Drag and drop** funcionalidade
- **Animações infinitas** com `repeat`

## 🎯 Principais Propriedades

### Animações Básicas
- `initial`: Estado inicial
- `animate`: Estado final
- `exit`: Estado de saída
- `transition`: Configuração da transição

### Interações
- `whileHover`: Durante hover
- `whileTap`: Durante clique
- `whileDrag`: Durante arraste
- `whileInView`: Quando visível no viewport

### Transições
- `duration`: Duração da animação
- `delay`: Atraso antes de começar
- `ease`: Tipo de easing
- `staggerChildren`: Delay entre filhos

## 🔧 Exemplos Práticos

### Fade In
```javascript
<motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
>
    Aparece suavemente
</motion.div>
```

### Slide In
```javascript
<motion.div
    initial={{ x: -100, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    transition={{ duration: 0.6 }}
>
    Desliza da esquerda
</motion.div>
```

### Hover Effect
```javascript
<motion.div
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
>
    Cresce no hover, diminui no clique
</motion.div>
```

### Animações em Sequência
```javascript
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

<motion.div variants={containerVariants}>
    {items.map(item => (
        <motion.div
            key={item.id}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            {item.content}
        </motion.div>
    ))}
</motion.div>
```

## 🎨 Compatibilidade

✅ **Totalmente compatível** com:
- Next.js 15.4.5
- React 19.1.0
- Tailwind CSS
- TypeScript (se usar)

## 📖 Recursos Adicionais

- [Documentação Oficial](https://www.framer.com/motion/)
- [Exemplos Interativos](https://www.framer.com/motion/examples/)
- [API Reference](https://www.framer.com/motion/api/)

## 🚀 Próximos Passos

1. Teste as animações executando `npm run dev`
2. Explore o componente `framer-examples.js`
3. Aplique animações nos seus próprios componentes
4. Experimente com diferentes tipos de easing e transições

---

**Dica**: O Framer Motion é muito performático e otimizado para React. Use sem medo em produção! 🎉 