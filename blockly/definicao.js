Blockly.Blocks['importar_conex_o'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://github.com/jefflovis/EasyMove-DSL/blob/main/imagens/Vector.png?raw=true", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("importar conexão");
    this.setNextStatement(true, null);
    this.setColour(230);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['movimentos'] = {
  init: function() {
    this.appendStatementInput("movimento_robo")
        .setCheck(null)
        .appendField(new Blockly.FieldImage("https://github.com/jefflovis/EasyMove-DSL/blob/main/imagens/Component%201.png?raw=true", 20, 20, { alt: "*", flipRtl: "FALSE" }))
        .appendField("Movimento do robô");
    this.setPreviousStatement(true, null);
    this.setColour(345);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['mover_atualizado'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Mover o robô");
    this.appendDummyInput()
        .appendField("(Informe o ponto) X:")
        .appendField(new Blockly.FieldNumber(0), "x")
        .appendField("metros,")
        .appendField("Y:")
        .appendField(new Blockly.FieldNumber(0), "y")
        .appendField("metros,")
        .appendField("Giro:")
        .appendField(new Blockly.FieldAngle(90), "NAME")
        .appendField("graus.");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(30);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['rotas'] = {
  init: function() {
    this.appendStatementInput("rota")
        .setCheck(null)
        .appendField("Rota")
        .appendField(new Blockly.FieldTextInput("Informe o nome da rota"), "NAME");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(105);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};